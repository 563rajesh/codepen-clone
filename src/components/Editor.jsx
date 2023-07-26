import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { useState } from "react";

import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import "../App.css";

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 8px 8px;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;
const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaabc;
  justify-content: space-between;
`;

const Editor = ({ language, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              width: "20px",
              height: "20px",
              display: "inline-block",
              background: color,
              placeContent: "center",
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {language}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center", cursor: "pointer" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        className="controlled-Editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  );
};
export default Editor;
