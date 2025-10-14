import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./routes/privateRoute";

function App() {
      return (
            <>
                  <Routes>
                        <Route path="/" element={<Navigate to="/home" />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/home" element={<PrivateRoute />}>
                              <Route path="/home" element={<HomePage />}></Route>
                        </Route>
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                  </Routes>
            </>
      );
}

export default App;
