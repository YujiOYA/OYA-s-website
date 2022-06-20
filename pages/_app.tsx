import { ChakraProvider } from "@chakra-ui/react";
import "/pages/css/acc.css";
import "/pages/css/mystyle.sass";
import theme from './theme'
import { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return ( 
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
