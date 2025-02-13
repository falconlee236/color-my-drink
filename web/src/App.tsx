import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Login.tsx";
import Mainpage from "./Mainpage.tsx";
import MainpageF from "./MainpageF.tsx";
import Step1 from "./Step1.tsx";
import Step2 from "./Step2.tsx";
import Step3 from "./Step3.tsx";
import Result from "./Result.tsx";
import Loading from "./Loading.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/mainpageF" element={<MainpageF />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
