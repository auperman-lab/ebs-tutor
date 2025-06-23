import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
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
    height: 100%;
    background-color: #FFF2E5;
  `,

  ratingGraph: css`
    width: 60% ;
    height: 100%;
    aspect-ratio: 2/1;
    text-align: center;

  `

}));
