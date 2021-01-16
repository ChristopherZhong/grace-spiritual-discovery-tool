import { MultilingualText } from './MultilingualText';
import stagesJson from '../assets/stages.json';

export interface Stage {
  readonly description: MultilingualText
  readonly id: MultilingualText
  readonly name: MultilingualText
  readonly range: {
    readonly min: number
    readonly max: number
  }
}

export function loadStages(): ReadonlyArray<Stage> {
  console.log(`Loading ${stagesJson.length} stages ...`);
  return stagesJson;
}
