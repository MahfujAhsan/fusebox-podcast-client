import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppProvider } from "./redux/Context";

export default function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AppProvider>
    </Provider>
  )
}
