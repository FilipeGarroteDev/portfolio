import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Reset from "./common/Reset";


function App() {
  return (
    <>
      <Reset/>
      <BrowserRouter>
        <Routes>
          <Route path="/teste" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
