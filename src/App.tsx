import { ThemeProvider } from "./context/ThemeProvider";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Navbar />
        <main>
          <TaskManager />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;