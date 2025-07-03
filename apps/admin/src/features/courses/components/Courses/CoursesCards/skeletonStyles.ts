import { createStyles, keyframes } from 'antd-style';

const shimmer = keyframes`
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
`;

export const useStyles = createStyles(() => ({

  wrapper:{
    height: '400px',
    padding: '0'
  },
  imageSkeleton: {
    width: '100%',
    height: '200px',
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%)',
    backgroundSize: '400% 100%',
    animation: `${shimmer} 3s ease-in-out infinite`,
  },
  spaceVertical: {
    width: "100%",
    marginTop: 12,
  },
  spaceTags: {
    gap: 8,
  },
  skeletonButtonLarge: {
    width: 60,
    height: 20,
    borderRadius: 10,
  },
  skeletonButtonMedium: {
    width: 50,
    height: 20,
    borderRadius: 10,
  },
  skeletonButtonSmall: {
    width: 40,
    height: 20,
    borderRadius: 10,
  },
  skeletonButtonWide: {
    width: 70,
    height: 20,
    borderRadius: 10,
  },
  skeletonInputDefault: {
    width: "80%",
    height: 24,
    borderRadius: 4,
  },
  dividerNoMargin: {
    margin: 0,
  },
  spaceBetweenButtons: {
    width: "100%",
    justifyContent: "space-between",
  },
  spaceBetweenInputs: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skeletonInputSmall: {
    width: 60,
    height: 24,
    borderRadius: 6,
  },
}));
