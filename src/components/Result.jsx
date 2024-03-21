import { Box } from "@mui/material";
import { DataContext } from "../context/Dataprovider";
import { useContext, useEffect, useState } from "react";

const Result = () => {
  // combine all three value
  const { html, css, js } = useContext(DataContext);
  const [src, setRrc] = useState("");

  const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
  `;
  //not render during writng code
  useEffect(() => {
    console.log("render");
    const timeout = setTimeout(() => {
      setRrc(srcCode);
    }, 1000);
    return () => clearInterval(timeout);
  }, [srcCode]);
  return (
    <Box>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default Result;
