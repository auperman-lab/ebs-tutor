import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css, responsive }) => ({
  wrapper: css`
    background-color: ${token.colorBgBase};
    height: 108px;
    width: 100%;
    padding: 24px;

    ${responsive.lg} {
      padding: 18px;
    }
  `,

  iconWrapper: css`
    max-width: 60px;
    width: 100%;
    aspect-ratio: 1;

    background-color: orange;  //also props

  `,
  icon: css`
    width: 32px;
    height: 100%;
  `,
  textWrapper: css`
    height:100%;
    padding:5px 0;
    padding-left: 20px;
    width: 100%;

  `

}));
