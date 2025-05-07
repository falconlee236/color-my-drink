import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.tsx";
import Mainpage from "./pages/Mainpage.tsx";
import Sharedpage from "./pages/Sharedpage.tsx";
import OrderTemperatureCup from "./pages/OrderTemperatureCup.tsx";
import OrderSizeIngredientAccess from "./pages/OrderSizeIngredientAccess.tsx";
import OrderNameMessage from "./pages/OrderNameMessage.tsx";
import Loading from "./pages/Loading.tsx";
import Result from "./pages/Result.tsx";
import CommunityRanking from "./pages/CommunityRanking.tsx";
import CommunityShowCase from "./pages/CommunityShowCase.tsx";
import CommunityNotice from "./pages/CommunityNotice.tsx";
import CommunityMyAccount from "./pages/CommunityMyAccount.tsx";
import ChangeName from "./pages/ChangeName.tsx";
import ChangeEmail from "./pages/ChangeEmail.tsx";
import ChangeAccount from "./pages/ChangeAccount.tsx";
import ResignNotice from "./pages/ResignNotice.tsx";

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
        <Route path="/community/ranking" element={<CommunityRanking />} />
        <Route path="/community/showcase" element={<CommunityShowCase />} />
        <Route path="/community/notice" element={<CommunityNotice />} />
        <Route path="/community/myaccount" element={<CommunityMyAccount />} />
        <Route path="/community/myaccount/name" element={<ChangeName />} />
        <Route path="/community/myaccount/email" element={<ChangeEmail />} />
        <Route
          path="/community/myaccount/account"
          element={<ChangeAccount />}
        />
        <Route
          path="/community/myaccount/account/resignNotice"
          element={<ResignNotice />}
        />
      </Routes>
    </BrowserRouter>
  );
}
