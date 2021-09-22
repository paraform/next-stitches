import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: "black",
      white: "white",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"marginTop">) => ({ marginTop: value }),
    mr: (value: Stitches.PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    radius: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),

    shadow: (value: Stitches.PropertyValue<"boxShadow">) => ({
      boxShadow: value,
    }),

    linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // Component
    stackGap:
      <T extends { theme: { space: any } }>(_: T) =>
      (value: `$${Extract<keyof T["theme"]["space"], string | number>}`) => ({
        $$gap: `$space${value}`,
      }),
  },
});

export const lightTheme = createTheme("light", {
  colors: {
    // Semantic Colors
    background: "$white",
    foreground: "$black",
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    // Semantic Colors
    background: "$black",
    foreground: "$white",
  },
});

export const themes = [lightTheme, darkTheme];

export type CSS = Stitches.CSS<typeof config>;

export const reset: Record<string, Stitches.CSS> = {
  html: {
    lineHeight: 1.15,
    "-webkit-text-size-adjust": "100%",
  },
  body: {
    margin: 0,
  },
  main: {
    display: "block",
  },
  h1: {
    fontSize: "2em",
    margin: "0.67em 0",
  },
  hr: {
    boxSizing: "content-box",
    height: 0,
    overflow: "visible",
  },
  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em",
  },
  a: {
    backgroundColor: "transparent",
  },
  "abbr[title]": {
    borderBottom: "none",
    textDecoration: "underline dotted",
  },
  "b, strong": {
    fontWeight: "bolder",
  },
  "code, kbd, samp": {
    fontFamily: "monospace, monospace",
    fontSize: "1em",
  },
  small: {
    fontSize: "80%",
  },
  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },
  sub: {
    bottom: "-0.25em",
  },
  sup: {
    top: "-0.5em",
  },
  img: {
    borderStyle: "none",
  },
  "button, input, optgroup, select, textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: 1.15,
    margin: 0,
  },
  "button, input": {
    overflow: "visible",
  },
  "button, select": {
    textTransform: "none",
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    "-webkit-appearance": "button",
  },
  'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner':
    {
      borderStyle: "none",
      padding: 0,
    },
  'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring':
    {
      outline: "1px dotted ButtonText",
    },
  fieldset: {
    padding: "0.35em 0.75em 0.625em",
  },
  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: 0,
    whiteSpace: "normal",
  },
  progress: {
    verticalAlign: "baseline",
  },
  textarea: {
    overflow: "auto",
  },
  '[type="checkbox"], [type="radio"]': {
    boxSizing: "border-box",
    padding: 0,
  },
  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button':
    {
      height: "auto",
    },
  '[type="search"]': {
    "-webkit-appearance": "textfield",
    outlineOffset: -2,
  },
  '[type="search"]::-webkit-search-decoration': {
    "-webkit-appearance": "none",
  },
  "::-webkit-file-upload-button": {
    "-webkit-appearance": "button",
    font: "inherit",
  },
  details: {
    display: "block",
  },
  summary: {
    display: "list-item",
  },
  template: {
    display: "none",
  },
  "[hidden]": {
    display: "none",
  },
};

export const globalStyles = globalCss(reset, {
  "*": { margin: 0, padding: 0 },

  "html, body": {
    background: "$background",
    color: "$foreground",
    margin: 0,
  },

  "::selection": {
    backgroundColor: "$foreground",
    color: "$background",
  },
});
