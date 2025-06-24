import { DANGER, INFO, PRIMARY, SECONDARY, SUCCESS, WARNING } from "./colors";

type ShadeKey =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"

type ColorType =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "danger"
  | "warning"

type ShadePalette<Color extends ColorType> = {
  [key in `${Color}${ShadeKey}`]: string
}

type ColorPalette = {
  primary: ShadePalette<"primary">
  secondary: ShadePalette<"secondary">
  success: ShadePalette<"success">
  warning: ShadePalette<"warning">
  info: ShadePalette<"info">
  danger: ShadePalette<"danger">
}

type ThemeCommon = {
  common: { black: string; white: string; }
  fontFamily: string
}

export type FullTokenCustom = ThemeCommon &
  ColorPalette & {

  colorPrimary: string
  colorSecondary: string
  colorInfo: string
  colorWarning: string
  colorSuccess: string

  colorBgBase: string
  borderRadius: number
  wireframe: boolean

  fontSizeXXL: number
  fontSizeXL: number
  fontSizeLG: number
  fontSize: number
  fontSizeSM: number

  fontSizeHeading1: number,
  fontSizeHeading2: number,
  fontSizeHeading3: number,
  fontSizeHeading4: number,
}

declare module "antd-style" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface FullToken extends FullTokenCustom {
  }
}

export const customThemePalette: FullTokenCustom = {
  fontFamily: "General Sans, sans-serif",

  colorPrimary: PRIMARY.primary500,
  colorSecondary: SECONDARY.secondary500,
  colorInfo: INFO.info500,
  colorWarning: WARNING.warning500,
  colorSuccess: SUCCESS.success500,

  colorBgBase: "#fff",
  borderRadius: 0,
  wireframe: false,

  fontSizeXXL: 20,
  fontSizeXL: 18,
  fontSizeLG: 16,
  fontSize: 14,
  fontSizeSM: 12,

  fontSizeHeading1: 48,
  fontSizeHeading2: 40,
  fontSizeHeading3: 32,
  fontSizeHeading4: 24,

  common: {
    black: "#000000",
    white: "#FFFFFF",
  },


  primary: PRIMARY,
  secondary: SECONDARY,
  success: SUCCESS,
  warning: WARNING,
  danger: DANGER,
  info: INFO,

};

