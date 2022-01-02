import SideBar from "./components/sidebar/Sidebar";
import { Box } from "@chakra-ui/react";

import theme from "./theme/theme";
import Main from "./components/Main";

function App() {
  return (
    <Box backgroundColor={theme.theme} minHeight={"100vh"}>
      <SideBar />
      <Main />
    </Box>
  );
}

export default App;
