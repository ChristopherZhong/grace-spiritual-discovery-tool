import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { QuestionType } from '../../types/QuestionType';
import { Question } from '../../types/Question';
import { loadStages } from '../../types/Stage';
import { getText } from '../../types/MultilingualText';
import { StageInfo } from '../x-stage-info/StageInfo';

export interface ResultsProps {
  language: string
  questions: Array<Question>;
}

interface Score {
  current: number
  total: number
}

const stages = loadStages();

function computeScores(questions: ReadonlyArray<Question>): ReadonlyMap<QuestionType, Score> {
  const map = new Map<QuestionType, Score>();
  questions.forEach((value) => {
    const score = map.get(value.type) ?? { current: 0, total: 0 };
    score.current += value.answer;
    score.total += value.choices.reduce((max, choice) => Math.max(max, choice.points), 0);
    map.set(value.type, score);
  });
  return map;
}

function createComponent(scores: ReadonlyMap<QuestionType, Score>, language: string): ReadonlyArray<string> {
  const results: Array<string> = [];
  scores.forEach((value, key) => {
    console.log(`>>> type=${key}, value=${value}`);
    const percentage = toPercentage(value.current / value.total);
    const stageName = getStageName(percentage, language);
    results.push(`${key} : ${value.current} / ${value.total} : ${percentage}%: ${stageName}`);
  });
  return results;
}

const toPercentage = (value: number): number => Math.round(value * 100);

function getStageName(percentage: number, language: string): string {
  const stage = stages.find((stage) => stage.range.min <= percentage && percentage <= stage.range.max);
  console.debug(`>>> Assessment::getStageName(): percentage=${percentage}, stage=${JSON.stringify(stage)}`);
  if (stage) {
    const [text] = getText(stage.name, language);
    return text;
  }
  console.warn(`Unable to find the correct stage for the given "${percentage}" value: ${JSON.stringify(stages)}`);
  return '';
}

export function Assessment(props: ResultsProps): JSX.Element {
  const { language, questions } = props;
  const scores = computeScores(questions);
  const results = createComponent(scores, language);
  return (
    <Card>
      <CardHeader title='Assessment Results'/>
      <CardContent>
        <ol>
          {results.map((value, index) => <li key={index}>{value}</li>)}
        </ol>
        {stages.map((stage, index) => <StageInfo key={index} language={language} stage={stage}/>)}
      </CardContent>
    </Card>
  );
}
