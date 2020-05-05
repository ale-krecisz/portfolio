const media = {
  xxsmall: '360px',
  xsmall: '560px',
  small: '798px',
  medium: '1024px',
  large: '1440px',
  xlarge: '1700px',
};

export const mediaQuery = {
  xxsmall: `@media screen and (min-width: ${media.xxsmall})`,
  xsmall: `@media screen and (min-width: ${media.xsmall})`,
  small: `@media screen and (min-width: ${media.small})`,
  medium: `@media screen and (min-width: ${media.medium})`,
  large: `@media screen and (min-width: ${media.large})`,
  xlarge: `@media screen and (min-width: ${media.xlarge})`,
};

export const mediaQueryHeight = {
  xsmall: `@media screen and (min-width: ${media.xsmall})`,
  small: `@media screen and (min-width: ${media.small})`,
  medium: `@media screen and (min-width: ${media.medium}) and (max-height: 600px)`,
  large: `@media screen and (min-width: ${media.large})`,
};
