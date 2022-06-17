import { ChakraProvider } from "@chakra-ui/react";
import "/pages/css/acc.css";
import "/pages/css/mystyle.sass";
import theme from './theme'

export default function MyApp({ Component, pageProps }) {
  return ( 
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
