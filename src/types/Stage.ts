import { MultilingualText } from './MultilingualText';
import stagesJson from '../assets/stages.json';

export interface Stage {
  description: MultilingualText
  id: MultilingualText
  name: MultilingualText
  range: {
    min: number
    max: number
  }
}

export function loadStages(): ReadonlyArray<Stage> {
  console.log(`Loading ${stagesJson.length} stages ...`);
  return stagesJson;
}
