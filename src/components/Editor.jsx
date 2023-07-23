import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

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
      edit
    </Box>
  );
};
export default Editor;
