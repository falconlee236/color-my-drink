import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.tsx";
import Mainpage from "./pages/Mainpage.tsx";
import Sharedpage from "./pages/Sharedpage.tsx";
import Order1 from "./pages/Order1.tsx";
import Order2 from "./pages/Order2.tsx";
import Order3 from "./pages/Order3.tsx";
import Loading from "./pages/Loading.tsx";
import Result from "./pages/Result.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/sharedpage" element={<Sharedpage />} />
        <Route path="/order1" element={<Order1 />} />
        <Route path="/order2" element={<Order2 />} />
        <Route path="/order3" element={<Order3 />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
