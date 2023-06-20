import { change, date } from 'common/changelog';
import { Sref, Phased, emallson, Trevor, Vohrr, ToppleTheNun } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';
import { TALENTS_DRUID } from 'common/TALENTS';
import SPELLS from 'common/SPELLS';

export default [
  change(date(2023, 6, 20), 'Update SpellLink usage.', ToppleTheNun),
  change(date(2023, 5, 17), <>Added <SpellLink spell={TALENTS_DRUID.NOURISH_TALENT}/> to HPM and HPCT charts.</>, Sref),
  change(date(2023, 5, 4), <>Updated T30 (Aberrus) set to account for April 28 patch.</>, Sref),
  change(date(2023, 3, 30), <>Updated T30 (Aberrus) set to account for March 28 patch.</>, Sref),
  change(date(2023, 3, 20), <>Added support for T30 (Aberrus) set statistics, check it out with your PTR logs!</>, Sref),
  change(date(2023, 3, 22), <>Bump Restoration Druid to 10.0.7</>, Trevor),
  change(date(2023, 3, 17), <>Fixed an issue where Wild Growth cast just before a Flourish or Convoke wouldn't be counted in the cooldown breakdown.</>, Sref),
  change(date(2023, 3, 14), <>Updated <SpellLink spell={TALENTS_DRUID.NATURES_VIGIL_TALENT} /> module to account for changes to single target heal list.</>, Sref),
  change(date(2023, 2, 16), <>Corrected Typo in the <SpellLink spell={TALENTS_DRUID.LIFEBLOOM_TALENT}/> uptimes efficiency guide section.</>, Vohrr),
  change(date(2023, 1, 25), <>Updated numbers for 10.0.5 changes.</>, Sref),
  change(date(2023, 1, 21), <>Added statistic for Vault of the Incarnates 4 Piece. </>, Sref),
  change(date(2022, 12, 30), <>Improve accuracy of 2 piece module </>, Trevor),
  change(date(2022, 12, 29), <>Added statistic for Vault of the Incarnates 2 Piece. </>, Phased),
  change(date(2022, 12, 14), <>Added Preparation Section to Guide.</>, Sref),
  change(date(2022, 12, 14), <>Bump patch compatibility to 10.0.2.</>, emallson),
  change(date(2022, 11, 19), <>Updated <SpellLink spell={TALENTS_DRUID.NURTURING_DORMANCY_TALENT} /> to account for latest tuning changes, including duration cap.</>, Sref),
  change(date(2022, 11, 16), <>Added statistic for <SpellLink spell={TALENTS_DRUID.DREAMSTATE_TALENT} />.</>, Phased),
  change(date(2022, 11, 13), <>Added cast efficiency numbers to Guide cooldown bars.</>, Sref),
  change(date(2022, 10, 31), <>Added statistic for <SpellLink spell={TALENTS_DRUID.BUDDING_LEAVES_TALENT} /></>, Sref),
  change(date(2022, 10, 30), <>Fixed an issue where tracked HoT durations were not scaling correctly with <SpellLink spell={TALENTS_DRUID.GERMINATION_TALENT} /> and <SpellLink spell={TALENTS_DRUID.CIRCLE_OF_LIFE_AND_DEATH_SPEC_TALENT} /></>, Sref),
  change(date(2022, 10, 30), <>Added talent point count to <SpellLink spell={TALENTS_DRUID.REGENESIS_TALENT} /> and cleaned up some unintended console spam.</>, Sref),
  change(date(2022, 10, 28), <>Rearranged Guide's 'Cooldown Breakdown' section for improved readability</>, Sref),
  change(date(2022, 10, 25), <>Updated numbers to account for pre-patch tuning pass.</>, Sref),
  change(date(2022, 10, 23), <>Updated Guide's 'cast box' displays with better tooltips. Made high overheal <SpellLink spell={SPELLS.WILD_GROWTH} /> detection slightly less strict. Fixed an issue where <SpellLink spell={SPELLS.SWIFTMEND} /> tracking wasn't detecting <SpellLink spell={SPELLS.REJUVENATION_GERMINATION} /> removal.</>, Sref),
  change(date(2022, 10, 19), <>Rearranged Guide's 'Core Rotation' section for improved readability</>, Sref),
  change(date(2022, 10, 16), <>Fixed a bug where casting Flourish before your first Convoke caused a crash in the Flourish module.</>, Sref),
  change(date(2022, 10, 14), <>Updated statistics for <SpellLink spell={TALENTS_DRUID.POWER_OF_THE_ARCHDRUID_TALENT} /> and <SpellLink spell={TALENTS_DRUID.REGENESIS_TALENT} /> to provide breakdown by spell.</>, Sref),
  change(date(2022, 10, 14), <>Added statistic and mana efficiency entry for <SpellLink spell={TALENTS_DRUID.OVERGROWTH_TALENT} />. You may stop bothering me now, Zimbita.</>, Sref),
  change(date(2022, 10, 9), <>Added statistic for <SpellLink spell={TALENTS_DRUID.RAMPANT_GROWTH_TALENT} />. Fixed an issue where <SpellLink spell={TALENTS_DRUID.POWER_OF_THE_ARCHDRUID_TALENT} /> wasn't counting procs that occur during <SpellLink spell={TALENTS_DRUID.CONVOKE_THE_SPIRITS_TALENT} />. Updated <SpellLink spell={TALENTS_DRUID.SOUL_OF_THE_FOREST_RESTORATION_TALENT} />, <SpellLink spell={TALENTS_DRUID.POWER_OF_THE_ARCHDRUID_TALENT} />, <SpellLink spell={TALENTS_DRUID.CONVOKE_THE_SPIRITS_TALENT} />, and <SpellLink spell={TALENTS_DRUID.NURTURING_DORMANCY_TALENT} /> to account for balance changes in Beta build 45969. </>, Sref),
  change(date(2022, 9, 30), <>Added statistic for <SpellLink spell={TALENTS_DRUID.NATURES_VIGIL_TALENT} /></>, Sref),
  change(date(2022, 9, 29), <>Updated <SpellLink spell={TALENTS_DRUID.ABUNDANCE_TALENT} /> and <SpellLink spell={TALENTS_DRUID.NURTURING_DORMANCY_TALENT} /> to account for nerfs on beta. Fixed an issue where <SpellLink spell={TALENTS_DRUID.REFORESTATION_TALENT} /> showed in the wrong category. Fixed an issue where <SpellLink spell={TALENTS_DRUID.POWER_OF_THE_ARCHDRUID_TALENT} /> used the wrong ID.</>, Sref),
  change(date(2022, 9, 26), <>Added handling and stats for <SpellLink spell={TALENTS_DRUID.GROVE_TENDING_TALENT} />, <SpellLink spell={TALENTS_DRUID.NURTURING_DORMANCY_TALENT} />, <SpellLink spell={TALENTS_DRUID.VERDANCY_TALENT} />, <SpellLink spell={TALENTS_DRUID.HARMONIOUS_BLOOMING_TALENT} />, and <SpellLink spell={TALENTS_DRUID.REGENESIS_TALENT} />. First pass on updating text in Guide.</>, Sref),
  change(date(2022, 9, 23), <>Updates for this week's Beta build.</>, Sref),
  change(date(2022, 9, 13), <>Initial updates for Dragonflight Talent system.</>, Sref),
  change(date(2022, 8, 4), <>Updated and made default new Guide-style overview page!</>, Sref),
];
