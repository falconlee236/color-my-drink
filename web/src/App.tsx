import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.tsx";
import Mainpage from "./pages/Mainpage.tsx";
import Sharedpage from "./pages/Sharedpage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/sharedpage" element={<Sharedpage />} />
      </Routes>
    </BrowserRouter>
  );
}
