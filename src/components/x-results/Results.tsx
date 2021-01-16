import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { QuestionType } from '../../types/QuestionType';
import { Question } from '../../types/Question';
import { loadStages } from '../../types/Stage';
import { getText } from '../../types/MultilingualText';

export interface ResultsProps {
  language: string
  questions: Array<Question>;
}

interface Score {
  current: number
  total: number
}

const toPercent = (value: number): string => `${(value * 100).toFixed(2)}%`;

function toStage(value: number): string {
  if (value < .26)
    return 'Exploring Christ';
  if (value < .51)
    return 'Growing in Christ';
  if (value < .76)
    return 'Close to Christ';
  return 'Christ-Centred';
}

const stages = loadStages();

export function Results(props: ResultsProps): JSX.Element {
  const { language, questions } = props;
  const map = new Map<QuestionType, Score>();
  questions.forEach((value) => {
    let score = map.get(value.type);
    if (score === undefined) {
      score = {
        current: 0,
        total: 0,
      };
    }
    score.current += value.answer;
    score.total += value.choices.reduce((max, choice) => Math.max(max, choice.points), 0);
    map.set(value.type, score);
  });
  const results: Array<string> = [];
  map.forEach((value, key) => {
    console.log(`>>> type=${key}, value=${value}`);
    const score = value.current / value.total;
    results.push(`${key} : ${value.current} / ${value.total} : ${toPercent(score)}: ${toStage(score)}`);
  });
  return (
    <Card>
      <CardHeader title='Assessment Results'/>
      <CardContent>
        <ol>
          {results.map((value, index) => <li key={index}>{value}</li>)}
        </ol>
        {stages.map((value, index) => (
          <Card
            key={index}
            variant='outlined'
          >
            <CardContent>
              <Typography
                align='left'
                color='textSecondary'
                variant='body2'
              >
                {value.range.min}&ndash;{value.range.max}%
              </Typography>
              <Typography
                align='left'
                variant='subtitle1'
              >
                {getText(value.id, language)}: {getText(value.name, language)}
              </Typography>
              <Typography
                align='left'
                variant='body2'
              >
                {getText(value.description, language)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
