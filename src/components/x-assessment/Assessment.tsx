import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { QuestionType } from '../../types/QuestionType';
import { Question } from '../../types/Question';
import { loadStages } from '../../types/Stage';
import { getText } from '../../types/MultilingualText';
import { StageInfo } from '../x-stage-info/StageInfo';
import { EmailAssessmentButton } from '../x-email-assessment-button/EmailAssessmentButton';
import { AreaScore, computeScores } from '../../types/AreaScore';

export interface ResultsProps {
  readonly language: string
  readonly questions: ReadonlyArray<Question>;
}

const stages = loadStages();

function createComponent(scores: ReadonlyMap<QuestionType, AreaScore>, language: string): ReadonlyArray<string> {
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
      <CardActions>
        <EmailAssessmentButton scores={scores}/>
      </CardActions>
    </Card>
  );
}
