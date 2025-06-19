import { createStyles } from "antd-style";

export const useStyles = createStyles(({ responsive }) => ({
  login_options: {
    marginTop: 24,
    [responsive.xs]: {
      flexDirection: "column",
    },
  },

  auth_button: {
    padding: 0,
    width: "100%",
  },

  logo_container: {
    width: 40,
    height: "100%",
    border: "1px solid rgb(233, 234, 240)",
  },

  logo: {
    height: "fit-content",
    width: "fit-content",
  },

  company: {
    height: "100%",
    width: "80%",
  },
}));
