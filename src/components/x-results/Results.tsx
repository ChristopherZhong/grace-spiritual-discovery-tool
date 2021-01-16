import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { QuestionType } from '../../types/QuestionType';
import { Question } from '../../types/Question';

export interface ResultsProps {
  questions: Array<Question>;
}

interface Score {
  current: number
  total: number
}

const toPercent = (value: number): string => `${(value * 100).toFixed(2)}%`;

function toStage(value: number): string {
  if (value < .26)
    return 'Exploring Christ'
  if (value < .51)
    return 'Growing in Christ'
  if (value < .76)
    return 'Close to Christ'
  return 'Christ-Centred';
}

export function Results(props: ResultsProps): JSX.Element {
  const { questions } = props;
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
  const l: Array<string> = [];
  map.forEach((value, key) => {
    console.log(`>>> type=${key}, value=${value}`);
    const score = value.current / value.total;
    l.push(`${key} : ${value.current} / ${value.total} : ${toPercent(score)}: ${toStage(score)}`);
  });
  return (
    <Card>
      <CardHeader title='Assessment Results'/>
      <CardContent>
        <ol>
          {/*{questions.map((value, index) => <li key={index}>{JSON.stringify(value.answer)}</li>)}*/}
          {/*<li>{JSON.stringify(questions[28])}</li>*/}
          {l.map((value, index) => <li key={index}>{value}</li>)}
        </ol>
        <Typography>
          0-25%: Exploring Christ
          – It seems that you are at an intellectual tipping point, wrestling with whether or not to believe fully in
          God’s existence and Christ’s redemptive promise.
          There is no more important step in a person’s spiritual journey than choosing to believe that God is real and
          that Jesus Christ is the Son of God who came to earth to provide us with a pathway to eternal life.
          Determining whether or not to embrace these beliefs is the key issue that characterizes your spiritual
          condition and the primary focus for you in moving forward on your spiritual journey.
        </Typography>
        <Typography>
          26-50%: Growing in Christ
          - Based on your responses, it seems like you have a firm grasp of the essential beliefs of the Christian
          faith, but may struggle with doubt and feel a little unsure about what’s next.
          You rely on the church as a spiritual rudder to help guide your path.
          Connecting with other Christians though church activities and making an effort to incorporate spiritual
          practices, like prayer, into your life will build your spiritual confidence and helping you experience the joy
          and hope that come from a growing relationship with Christ.
          One area of opportunity for you is to increase your awareness of the needs of others and learn to put others
          first, regardless of who they are or whether or not you know them well.
        </Typography>
        <Typography>
          51-75%: Close to Christ
          - Based on your responses, you are someone who cares about people who cross your path and tries to respond
          with kindness to those in difficult circumstances.
          This is an admirable approach to life, and one that mirrors the heart of Jesus Christ.
          When it comes to your spiritual life, you seem to be struggling to accept fully Christ’s promise of salvation
          by grace and the idea that God is actively involved in your daily life.
          These doubts have you at the starting gate of your spiritual journey, ready to explore putting your full trust
          in God’s love for you in Christ.
        </Typography>
        <Typography>
          76%-100%: Christ-Centred
          - Your daily life seems to bear witness to your deep love of God and others and a genuine submission to the
          authority of God’s Word.
          Jesus Christ is your role model and your central purpose in life is to be a living example of his values and
          commandments.
          Your willingness to put others first, whether or not you know them, springs from this commitment.
          One significant contribution you can make to the Kingdom may be through mentoring others, to challenge them,
          as you challenge yourself, to grow in their intimacy with God and to increase their sacrificial love for
          others.
        </Typography>
      </CardContent>
    </Card>
  );
}
