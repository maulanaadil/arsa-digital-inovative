import { useMediaQuery } from 'react-responsive';

const breakpoint = {
  sm: 639,
  md: 767,
  lg: 1023,
  xl: 1279,
  '2xl': 1535,
};

const useResponsive = (bp) =>
  useMediaQuery({ query: `(max-width: ${breakpoint[bp]}px)` });

export default useResponsive;
