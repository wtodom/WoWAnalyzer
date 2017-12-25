import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';
import Combatants from 'Parser/Core/Modules/Combatants';

import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import Wrapper from 'common/Wrapper';

/*
  Frothing Berserker users should maximize casts with 100 rage to proc Frothing Berserker the post
  Carnage users should cast as soon as possible, i.e. at 70 rage
  Massacre users (not from Soul of the Battlelord) should cast as soon as possible, i.e. at 85 rage
  Whenever Battle Cry is active, user should cast Rampage whenever possible - regardless of talents
*/

class RampageUsage extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };

  last_rampage = null;
  casts_counter = 0;
  premature_counter = 0;
  reckless_abandon = null;

  on_initialized() {
    this.reckless_abandon = this.combatants.selected.hasTalent(SPELLS.RECKLESS_ABANDON_TALENT.id);
  }

  on_byPlayer_cast(event) {
    if (event.ability.guid === SPELLS.RAMPAGE.id) { 
      const rage = Math.floor(event.classResources[0].amount / 10);
      
      // Ignore any free casts due to Massacre talent
      if(this.combatants.selected.hasBuff(SPELLS.MASSACRE.id)) {
        return;
      }
      
      this.casts_counter++;

      if (rage < 100) {
        this.premature_counter++;
        this.last_rampage = event;
      }

    } else if (event.ability.guid === SPELLS.BATTLE_CRY.id && this.last_rampage && this.reckless_abandon) {
      
      if (event.timestamp - this.last_rampage.timestamp < 2000) {
        this.premature_counter--;
        this.last_rampage = null;
      }
    }
  }

  get suggestionThresholdsFrothingBerserker() {
    return {
      isGreaterThan: {
        minor: 0,
        average: 1,
        major: 5,
      },
      style: 'fixed',
    };
  }

  suggestions(when) {
    const {
      isGreaterThan: {
          minor,
          average,
          major,
        },
      } = this.suggestionThresholdsFrothingBerserker;
      
      // Frothing Berserker users should cast Rampage at 100 rage only
      if(this.combatants.selected.hasTalent(SPELLS.FROTHING_BERSERKER_TALENT.id)) {
        when(this.premature_counter).isGreaterThan(minor)
          .addSuggestion((suggest, actual, recommended) => {
            return suggest(<Wrapper>Try to cast <SpellLink id={SPELLS.RAMPAGE.id} /> at 100 rage to proc <SpellLink id={SPELLS.FROTHING_BERSERKER_TALENT.id} />.</Wrapper>)
              .icon(SPELLS.RAMPAGE.icon)
              .actual(`${actual} out of ${this.casts_counter} (${(actual / this.casts_counter * 100).toFixed(2)}%) of your Rampage casts were cast below 100 rage.`)
              .recommended(`0 is recommended`)
              .regular(average).major(major);
          });

        // Carnage users should cast Rampage at 70 rage

        // Otherwise cast at 80 rage
    }
  }
}

export default RampageUsage;