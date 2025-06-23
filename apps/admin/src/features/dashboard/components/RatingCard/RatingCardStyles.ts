import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css, responsive }, color: string) => ({
  wrapper: css`
    background-color: white;
    min-height: 480px;
    height: 100%;
    width: 100%;
  `,

  ratingScore: css`
    max-width: 40%;
    width: 100%;
    gap: 5px;
    aspect-ratio: 1;
    background-color: #FFF2E5;
  `,

  ratingGraph: css`
    max-width: 60%;
    width: 100%;
    height: 100%;
    background-color: #FFF2E5
  `

}));
