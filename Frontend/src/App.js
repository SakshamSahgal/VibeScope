import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Resources from "./pages/Resources";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
