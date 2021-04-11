import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { Question } from '../../types/Question';
import { loadStages } from '../../types/Stage';
import { getText } from '../../types/MultilingualText';
import { StageInfo } from '../x-stage-info/StageInfo';
import { EmailAssessmentButton } from '../x-email-assessment-button/EmailAssessmentButton';
import { computeScores } from '../../types/AreaScore';
import { AreaResult, finalizeResults } from '../../types/AreaResult';

const stages = loadStages();

function createComponent(results: ReadonlyArray<AreaResult>, language: string): ReadonlyArray<string> {
  return results.map((result, index) => {
    console.debug(`>>> Assessment::createComponent(): index=${index}, result=${JSON.stringify(result)}`);
    const [text, found] = getText(result.stage.name, language);
    return `${result.area}: ${result.current} / ${result.total} : ${result.percentage}%: ${found ? '' : '*'}${text}`;
  });
}

export interface AssessmentProps {
  readonly language: string
  readonly questions: ReadonlyArray<Question>;
}

export function Assessment({ language, questions }: AssessmentProps): JSX.Element {
  const scores = computeScores(questions);
  const results = finalizeResults(scores, stages);
  const components = createComponent(results, language);
  return (
    <Card>
      <CardHeader title='Assessment Results'/>
      <CardContent>
        <ol>
          {components.map((value, index) => <li key={index}>{value}</li>)}
        </ol>
        {stages.map((stage, index) => <StageInfo key={index} language={language} stage={stage}/>)}
      </CardContent>
      <CardActions>
        <EmailAssessmentButton language={language} results={results}/>
      </CardActions>
    </Card>
  );
}
