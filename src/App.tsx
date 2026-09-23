import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;