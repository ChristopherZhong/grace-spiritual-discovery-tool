import { Button } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { QuestionType } from '../../types/QuestionType';
import { AreaScore } from '../../types/AreaScore';

export interface EmailAssessmentButtonProps {
  scores: ReadonlyMap<QuestionType, AreaScore>
}

function mailto(
  body: string,
  subject: string,
): string {
  return encodeURI(`mailto:?body=${body}&subject=${subject}`);
}

export function EmailAssessmentButton(props: EmailAssessmentButtonProps) {
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
