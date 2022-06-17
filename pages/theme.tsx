import { extendTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";



export const theme = ()=>{
    extendTheme({

  styles: {
    global: {
      body: {
        fontFamily: "M PLUS Rounded 1c",
        color: "#333",
        textShadow: "0px 0px 1px #333",
        backgroundSize: "100% 100%",
        background: `linear-gradient(#dde3f3, #eeffda, #e7dc7e, #ccddee, #23d5ab)`,
    }
  }
}})
};

