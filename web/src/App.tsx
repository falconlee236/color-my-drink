import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.tsx";
import Mainpage from "./pages/Mainpage.tsx";
import Sharedpage from "./pages/Sharedpage.tsx";
import OrderTemperatureCup from "./pages/OrderTemperatureCup.tsx";
import OrderSizeIngredientAccess from "./pages/OrderSizeIngredientAccess.tsx";
import OrderNameMessage from "./pages/OrderNameMessage.tsx";
import Loading from "./pages/Loading.tsx";
import Result from "./pages/Result.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/sharedpage" element={<Sharedpage />} />
        <Route path="/OrderTemperatureCup" element={<OrderTemperatureCup />} />
        <Route
          path="/OrderSizeIngredientAccess"
          element={<OrderSizeIngredientAccess />}
        />
        <Route path="/OrderNameMessage" element={<OrderNameMessage />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
