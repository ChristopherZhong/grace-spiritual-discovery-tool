import React from 'react';
import { Button } from '@mui/material';
import { Email } from '@mui/icons-material';
import { AreaResult } from '../../types/AreaResult';
import { getText } from '../../types/MultilingualText';
import { useLanguage } from '../../contexts/language';

function mailto(body: string, subject: string): string {
  return encodeURI(`mailto:?body=${body}&subject=${subject}`);
}

export interface EmailAssessmentButtonProps {
  readonly results: ReadonlyArray<AreaResult>;
}

export function EmailAssessmentButton({ results }: EmailAssessmentButtonProps): JSX.Element {
  const { language } = useLanguage();
  const s = results.map((result) => {
    const [id, idFound] = getText(result.stage.id, language.code);
    const [name, nameFound] = getText(result.stage.name, language.code);
    return `${result.area} : ${idFound ? '' : '*'}${id}: ${nameFound ? '' : '*'}${name}`;
  });
  const body = `Here is the assessment from the Grace Spiritual Discovery Tool.\n- ${s.join('\n- ')}`;
  return (
    <Button
      href={mailto(body, 'Grace Spiritual Discovery Tool - Assessment')}
      rel="noopener noreferrer"
      startIcon={<Email />}
      target="_blank"
      variant="outlined"
    >
      Email Assessment
    </Button>
  );
}
