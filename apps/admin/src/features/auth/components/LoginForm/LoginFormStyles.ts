import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ responsive }) => ({
  login_form: {
    width: '100%',
  },

  form_submit: {
    marginTop: '1rem',

    [responsive.xs]: {
      flexDirection: 'column',
    },
  },

  auth_button: {
    padding: '0 48px',
  },
}));
