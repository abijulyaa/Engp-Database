import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar"
import Line from "../../scenes/line";
import './line.css'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Line />
      </main>
      </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
