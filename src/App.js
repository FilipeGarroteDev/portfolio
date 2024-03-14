
import HomePage from "./pages/HomePage/HomePage";
import Reset from "./common/Reset";
import ParticleBg from "./common/ParticleBg";
import MenuBar from "./components/MenuBar";
import PersonalInfoPage from "./pages/PersonalInfoPage/PersonalInfoPage";
import Projects from "./pages/Projects/Projects";
import MyServices from "./pages/MyServices/MyServices";
import Avaliations from "./pages/Avaliations/Avaliations";

function App() {

  return (
    <>
      <Reset/>
      <ParticleBg />

      <MenuBar />
      
      <HomePage />
      <PersonalInfoPage/>
      <Projects/>
      <MyServices/>
      <Avaliations/>
    </>
  );
}

export default App;
