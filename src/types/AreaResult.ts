import { Stage } from './Stage';
import { AreaScore } from './AreaScore';

export interface AreaResult extends AreaScore {
  readonly percentage: number
  readonly stage: Stage
}

const errorStage: Stage = {
  description: {
    'en': 'Error Description',
  },
  id: {
    'en': 'Error ID',
  },
  name: {
    'en': 'Error Name',
  },
  range: {
    max: -1,
    min: -1,
  },
};

const toPercentage = (value: number): number => Math.round(value * 100);

const getStage = (percentage: number, stages: ReadonlyArray<Stage>): Stage => {
  const filter = stages.filter((stage) => stage.range.min <= percentage && percentage <= stage.range.max);
  if (filter.length === 1) {
    return filter[0];
  }
  console.error(`The ${percentage} percentage resulted in an unexpected list: ${JSON.stringify(filter)}`);
  return errorStage;
};

export function finalizeResults(scores: ReadonlyArray<AreaScore>, stages: ReadonlyArray<Stage>): ReadonlyArray<AreaResult> {
  return scores.map((score) => {
    const percentage = toPercentage(score.current / score.total);
    const stage = getStage(percentage, stages);
    return {
      ...score,
      percentage: percentage,
      stage: stage,
    };
  });
}
