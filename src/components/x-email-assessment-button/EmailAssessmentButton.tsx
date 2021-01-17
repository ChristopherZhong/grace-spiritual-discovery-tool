import { Button } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { AreaScore } from '../../types/AreaScore';

function mailto(
  body: string,
  subject: string,
): string {
  return encodeURI(`mailto:?body=${body}&subject=${subject}`);
}

export interface EmailAssessmentButtonProps {
  readonly scores: ReadonlyArray<AreaScore>
}

export function EmailAssessmentButton(props: EmailAssessmentButtonProps) {
  const { scores } = props;
  scores.map((score) => `${score.area} : ${score}`);
  return (
    <Button
      href={mailto(
        'Here is the assessment from the Grace Spiritual Discovery Tool.\nabc\nabc',
        'Grace Spiritual Discovery Tool - Assessment',
      )}
      rel='noopener noreferrer'
      startIcon={<Email/>}
      target='_blank'
      variant='outlined'
    >
      Email Assessment
    </Button>
  );
}
