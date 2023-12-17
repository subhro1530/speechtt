// pages/_app.js
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

const globalStyles = css`
  // Your additional global styles here
`;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
