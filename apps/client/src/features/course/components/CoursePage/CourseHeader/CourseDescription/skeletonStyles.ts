import { createStyles, keyframes } from 'antd-style';

const shimmer = keyframes`
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
`;

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    width: '100%',
    background: token.colorWhite,
    padding: token.paddingLG,
  },
  image: {
    width: 352,
    height: 264,
    borderRadius: 4,
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%)',
    animation: `${shimmer} 3s ease-in-out infinite`,
    flexShrink: 0,
  },
  description: {
    flex: 1,
  },
  date: {
    width: 160,
  },
  title: {
    width: '60%',
    height: 32,
  },
  avatarGroup: {
    display: 'flex',
    gap: 4,
  },
  metaText: {
    width: 200,
  },
  rating: {
    width: 80,
  },
  price: {
    width: 100,
  },

  buttonPrimary: {
    width: 140,
    height: 40,
    borderRadius: 6,
  },
  buttonSecondary: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
}));
