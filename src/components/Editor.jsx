import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import "../App.css";
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

const Editor = () => {
  return (
    <Box>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              width: "20px",
              height: "20px",
              display: "inline-block",
              background: "red",
              placeContent: "center",
            }}
          >
            /
          </Box>
          html
        </Heading>
        <CloseFullscreenIcon />
      </Header>
      <ControlledEditor
        className="controlled-Editor"
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Box>
  );
};
export default Editor;
