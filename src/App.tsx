import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home.tsx";
import Plans from "./pages/Plans.tsx";
import Resume from "./pages/Resume.tsx";
import { Header } from "./components/index.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
