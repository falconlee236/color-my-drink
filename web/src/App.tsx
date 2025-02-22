import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Login.tsx";
import Mainpage from "./Mainpage.tsx";
import MainpageF from "./MainpageF.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/MainpageF" element={<MainpageF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
