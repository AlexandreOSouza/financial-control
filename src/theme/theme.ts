import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  gray: {
    50: "#F4F4F7",
  },
  main: {
    100: "#0DEBA7",
    200: "#32D2A1",
    300: "#164F3D",
    400: "#0D3126",
  },
  blue: {
    100: "#06C7E9",
    200: "#00A1BE",
    300: "#5761D7",
  },
  white: {
    100: "#F4F4F6",
    200: "#FDFCFC",
  },
};

const global = {
  global: {
    "html, body": {
      background: "gray.50",
    },
  },
};

const theme = extendTheme({
  colors,
  styles: global,
});

export default theme;
