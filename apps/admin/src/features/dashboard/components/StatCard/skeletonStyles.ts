import { createStyles } from "antd-style";

export const useStyles = createStyles(() => ({
  wrapper: {
    backgroundColor: "#fafafa",
    padding: 16,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)",
    height: "100%",
    borderRadius: 0,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textWrapper: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    width: 60,
    height: 24,
    borderRadius: 4,
  },
  subtitle: {
    width: 40,
    height: 16,
    borderRadius: 4,
  },
}));
