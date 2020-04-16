const media = {
  xsmall: '360px',
  small: '798px',
  medium: '1024px',
  large: '1440px',
  xlarge: '1700px',
};

export const mediaQuery = {
  xsmall: `@media screen and (min-width: ${media.xsmall})`,
  small: `@media screen and (min-width: ${media.small})`,
  medium: `@media screen and (min-width: ${media.medium})`,
  large: `@media screen and (min-width: ${media.large})`,
};

export const mediaQueryHeight = {
  xsmall: `@media screen and (min-width: ${media.xsmall})`,
  small: `@media screen and (min-width: ${media.small})`,
  medium: `@media screen and (min-width: ${media.medium}) and (max-height: 600px)`,
  large: `@media screen and (min-width: ${media.large})`,
};
