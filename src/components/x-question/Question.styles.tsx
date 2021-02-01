import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {},
    cardHeader: {},
    cardHeaderTitle: {
      fontWeight: 'bold',
      textAlign: 'start',
      textTransform: 'uppercase',
    },
    formControl: {
      width: '100%',
    },
    formLabel: {
      fontSize: 'x-large',
      fontWeight: 'lighter',
      textAlign: 'start',
      marginBottom: theme.spacing(2),
    },
  }),
);
