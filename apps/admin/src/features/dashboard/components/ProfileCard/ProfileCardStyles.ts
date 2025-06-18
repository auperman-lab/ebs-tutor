import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css, responsive }) => ({
  wrapper: css`
    //background-color: #f0f0f0f0;
    background-color: #111033;
    height: 160px;
    width: 100%;
    padding: 40px;

    ${responsive.lg} {
      padding: 30px;
    }
  `,

  avatarWrapper: css`
    height: 100%;
    width: 100%;
    max-width: 200px;
    color: white;
  `,


  progressWrapper: css`
    color: white;
    height: 100%;
  `,

  progressText: css`
    white-space: nowrap;
    opacity: 60%;
  `,

  buttonsWrapper: css`
  `,
  downButton: css`
    border: 0 !important;
    background-color: #FFFFFF0D;
    padding: 0 ;
    aspect-ratio: 1;
    color: white;
    font-weight: bold;

  `

}));
