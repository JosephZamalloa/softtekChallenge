import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home.tsx";
import Plans from "./pages/Plans.tsx";
import Resume from "./pages/Resume.tsx";
import { Header } from "./components/index.tsx";
import useUserStore from "./stores/store.ts";

function App() {
  const { userData } = useUserStore();
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/plans"
            element={
              userData.documentNumber && userData.phone ? (
                <Plans />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/resume"
            element={
              userData.documentNumber && userData.phone ? (
                <Resume />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
