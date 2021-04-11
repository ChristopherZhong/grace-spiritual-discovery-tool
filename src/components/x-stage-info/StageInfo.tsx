import { Card, CardContent, Typography } from '@material-ui/core';
import { getText } from '../../types/MultilingualText';
import { Stage } from '../../types/Stage';
import { useLanguage } from '../../contexts/language';

export interface StageInfoProps {
  readonly stage: Stage
}

export function StageInfo({ stage }: StageInfoProps): JSX.Element {
  const { language } = useLanguage();
  const [id, foundId] = getText(stage.id, language.code);
  const [description, foundDescription] = getText(stage.description, language.code);
  const [name, foundName] = getText(stage.name, language.code);
  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography
          align='left'
          color='textSecondary'
          variant='body2'
        >
          {stage.range.min}&ndash;{stage.range.max}%
        </Typography>
        <Typography
          align='left'
          variant='subtitle1'
        >
          {foundId ? '' : '*'}{id}: {foundName ? '' : '*'}{name}
        </Typography>
        <Typography
          align='left'
          variant='body2'
        >
          {foundDescription ? '' : '*'}{description}
        </Typography>
      </CardContent>
    </Card>
  );
}
