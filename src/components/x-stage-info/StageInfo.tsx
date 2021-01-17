import { Card, CardContent, Typography } from '@material-ui/core';
import { getText } from '../../types/MultilingualText';
import { Stage } from '../../types/Stage';

export interface StageInfoProps {
  language: string
  stage: Stage
}

export function StageInfo(props: StageInfoProps): JSX.Element {
  const { language, stage } = props;
  const [id, foundId] = getText(stage.id, language);
  const [description, foundDescription] = getText(stage.description, language);
  const [name, foundName] = getText(stage.name, language);
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
