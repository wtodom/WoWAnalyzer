import { change, date } from 'common/changelog';
import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/mage';
import { SpellLink } from 'interface';
import { Sharrq, ToppleTheNun } from 'CONTRIBUTORS';

// prettier-ignore
export default [
  change(date(2024, 1, 6), <>Fixed a crash in <SpellLink spell={SPELLS.WINTERS_CHILL} />.</>, Sharrq),
  change(date(2024, 1, 5), 'Updated spec support to full 10.2 support.', Sharrq),
  change(date(2024, 1, 5), <>Fixed the cooldowns for <SpellLink spell={TALENTS.RAY_OF_FROST_TALENT} /> and <SpellLink spell={TALENTS.ICY_VEINS_TALENT} />.</>, Sharrq),
  change(date(2024, 1, 5), <>Added a statistic for the average delay to use <SpellLink spell={TALENTS.FINGERS_OF_FROST_TALENT} />. This is just informational.</>, Sharrq),
  change(date(2024, 1, 5), <>Added tracking for <SpellLink spell={TALENTS.RAY_OF_FROST_TALENT} />.</>, Sharrq),
  change(date(2024, 1, 5), <>Adjusted <SpellLink spell={SPELLS.WINTERS_CHILL} /> to change the spells that can be used to spend <SpellLink spell={SPELLS.WINTERS_CHILL} />.</>, Sharrq),
  change(date(2024, 1, 5), <>Updated <SpellLink spell={SPELLS.WINTERS_CHILL} /> to ignore pre-casts at 4 <SpellLink spell={SPELLS.ICICLES_BUFF} />.</>, Sharrq),
  change(date(2024, 1, 5), 'Rewrote most core frost functionality to use event links instead.', Sharrq),
  change(date(2023, 7, 10), 'Remove references to 10.1.5 removed talents.', Sharrq),
  change(date(2023, 7, 3), 'Update SpellLink usage.', ToppleTheNun),
	change(date(2023, 6, 27), <>Added <SpellLink spell={TALENTS.TEMPORAL_WARP_TALENT} /> to list of Bloodlust Buffs.</>, Sharrq),
	change(date(2023, 2, 12), <>Bumped support up to 10.0.5 and fixed an issue that could cause every Rune of Power cast to count as overlapped.</>, Sharrq),
	change(date(2023, 1, 14), `Added a link to Toegrinder's Mage Hub guide on the About page. Removed link to Icy Veins and Altered Time forums.`, Sharrq),
	change(date(2023, 1, 14), `Upgraded Frost Mage support to 10.0.2 and marked as Supported. Also removed Dambroda from spec maintainers.`, Sharrq),
	change(date(2023, 1, 14), `Reviewed all Suggestions, Tooltips, and Checklist items to ensure the wording is accurate for Dragonflight`, Sharrq),
	change(date(2023, 1, 14), <>Removed <SpellLink spell={TALENTS.BLAST_WAVE_TALENT} /> and <SpellLink spell={TALENTS.ICE_NOVA_TALENT} /> from Cast Efficiency.</>, Sharrq),
	change(date(2023, 1, 14), <>Fixed an issue where Icy Propulsion was not counting cooldown reduction outside of <SpellLink spell={TALENTS.ICY_VEINS_TALENT} />.</>, Sharrq),
	change(date(2023, 1, 14), <>Rebuilt the <SpellLink spell={TALENTS.BRAIN_FREEZE_TALENT} /> module and removed the messages about using <SpellLink spell={TALENTS.FLURRY_TALENT} /> without <SpellLink spell={TALENTS.BRAIN_FREEZE_TALENT} />.</>, Sharrq),
	change(date(2022, 12, 17), <>Fixed an error that was improperly counting <SpellLink spell={SPELLS.WINTERS_CHILL} /> Shattered Casts and Pre Casts.</>, Sharrq),
  change(date(2022, 12, 13), <>Fixed timeline buff highlights for <SpellLink spell={TALENTS.FINGERS_OF_FROST_TALENT} /> and <SpellLink spell={TALENTS.BRAIN_FREEZE_TALENT} />.</>, Sharrq),
  change(date(2022, 12, 13), <>Updated <SpellLink spell={TALENTS.SHIFTING_POWER_TALENT} /> CDR Spell List.</>, Sharrq),
  change(date(2022, 12, 13), <>Fixed Icy Propulsion CDR tracking.</>, Sharrq),
  change(date(2022, 12, 13), <>Fixed <SpellLink spell={TALENTS.BRAIN_FREEZE_TALENT} /> proc usage tracking.</>, Sharrq),
  change(date(2022, 12, 13), <>Fixed <SpellLink spell={TALENTS.FINGERS_OF_FROST_TALENT} /> munched proc tracking and used proc usage tracking.</>, Sharrq),
  change(date(2022, 12, 13), `General fixes for incorrect Spell IDs, leftover Shadowlands stuff, etc.`, Sharrq),
  change(date(2022, 10, 30), `Update Dragonflight SPELLS, Abilities, and Buffs`, Sharrq),
  change(date(2022, 9, 29), `Dragonflight initial cleanup`, Sharrq),
];
