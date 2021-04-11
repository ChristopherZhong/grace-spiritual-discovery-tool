import { Button } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { AreaResult } from '../../types/AreaResult';
import { getText } from '../../types/MultilingualText';

function mailto(
  body: string,
  subject: string,
): string {
  return encodeURI(`mailto:?body=${body}&subject=${subject}`);
}

export interface EmailAssessmentButtonProps {
  readonly language: string
  readonly results: ReadonlyArray<AreaResult>
}

export function EmailAssessmentButton({ language, results }: EmailAssessmentButtonProps) {
  const s = results.map((result) => {
    const [id, idFound] = getText(result.stage.id, language);
    const [name, nameFound] = getText(result.stage.name, language);
    return `${result.area} : ${idFound ? '' : '*'}${id}: ${nameFound ? '' : '*'}${name}`;
  });
  const body = `Here is the assessment from the Grace Spiritual Discovery Tool.\n- ${s.join('\n- ')}`;
  return (
    <Button
      href={mailto(
        body,
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
