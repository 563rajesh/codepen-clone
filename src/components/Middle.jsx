import { Box, styled } from "@mui/material";
import Editor from "./Editor";
import { useContext } from "react";
import { DataContext } from "../context/Dataprovider";
const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 62vh;
  flex-wrap: wrap;
`;

const Middle = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor
        language="HTML"
        icon="/"
        color="#ff3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="JavaScript"
        icon="{}"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};
export default Middle;
