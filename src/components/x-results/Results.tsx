import { Card, CardContent, CardHeader } from '@material-ui/core';
import { QuestionType } from '../../types/QuestionType';
import { Question } from '../../types/Question';

interface ResultsProps {
  questions: Array<Question>;
  // scores: Map<QuestionType, number>;
}

export function Results(props: ResultsProps): JSX.Element {
  const { questions } = props;
  const map = new Map<QuestionType, { current: number, total: number }>();
  questions.forEach((value) => {
    let c = map.get(value.type);
    if (c === undefined) {
      c = {
        current: 0,
        total: 0,
      };
    }
    c.current += value.answer;
    c.total += value.choices.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue.points), 0);
    map.set(value.type, c);
  });
  const l: Array<string> = [];
  map.forEach((value, key) => {
    console.log(`>>> type=${key}, value=${value}`);
    l.push(`${key} : ${value.current} / ${value.total}`);
  });
  return (
    <Card>
      <CardHeader title='Final results'/>
      <CardContent>
        <ol>
          {/*{questions.map((value, index) => <li key={index}>{JSON.stringify(value.answer)}</li>)}*/}
          {/*<li>{JSON.stringify(questions[28])}</li>*/}
          {l.map((value, index) => <li key={index}>{value}</li>)}
        </ol>
      </CardContent>
    </Card>
  );
}
