import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css, responsive }) => ({
  imageContainer: css`
    width: 100%;
    height: 100%;
    background-color: #ebebff;

    img {
      width: 100%;
      height: auto;
    }

    ${responsive.md} {
      display: none;
    }
  `,
}));
