import { Route, Routes } from "react-router-dom"
import HomePageView from "./pages/Home/view";
import Layout from "./layout";
import SignIn from "./pages/Sign-In/SignIn";
import SignUp from "./pages/Sign-Up/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePageView />} />
          <Route path='login' element={<SignIn/>} />
          <Route path='register' element={<SignUp/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
