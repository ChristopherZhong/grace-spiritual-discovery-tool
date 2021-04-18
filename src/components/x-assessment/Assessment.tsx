import React from 'react';
import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { Question } from '../../types/Question';
import { loadStages } from '../../types/Stage';
import { getText } from '../../types/MultilingualText';
import { StageInfo } from '../x-stage-info/StageInfo';
import { EmailAssessmentButton } from '../x-email-assessment-button/EmailAssessmentButton';
import { computeScores } from '../../types/AreaScore';
import { AreaResult, finalizeResults } from '../../types/AreaResult';
import { useLanguage } from '../../contexts/language';

const stages = loadStages();

function createComponent(results: ReadonlyArray<AreaResult>, language: string): ReadonlyArray<string> {
  return results.map((result, index) => {
    console.debug(`>>> Assessment::createComponent(): index=${index}, result=${JSON.stringify(result)}`);
    const [text, found] = getText(result.stage.name, language);
    return `${result.area}: ${result.current} / ${result.total} : ${result.percentage}%: ${found ? '' : '*'}${text}`;
  });
}

export interface AssessmentProps {
  readonly questions: ReadonlyArray<Question>;
}

export function Assessment({ questions }: AssessmentProps): JSX.Element {
  const { language } = useLanguage();
  const scores = computeScores(questions);
  const results = finalizeResults(scores, stages);
  const components = createComponent(results, language.code);
  return (
    <Card>
      <CardHeader title='Assessment Results'/>
      <CardContent>
        <ol>
          {components.map((value, index) => <li key={index}>{value}</li>)}
        </ol>
        {stages.map((stage, index) => <StageInfo key={index} stage={stage}/>)}
      </CardContent>
      <CardActions>
        <EmailAssessmentButton results={results}/>
      </CardActions>
    </Card>
  );
}
