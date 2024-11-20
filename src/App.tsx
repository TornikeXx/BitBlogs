import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
import ErrorPage from "./pages/404/Error";

const HomePageView = lazy(() => import("./pages/Home/view"));
const SignInPage = lazy(() => import("./pages/Sign-In/SignIn"));
const SignUpPage = lazy(() => import("./pages/Sign-Up/SignUp"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const SingleAuthorsView = lazy(
  () =>
    import(
      "./pages/Home/components/Additionals/Authors/single/SingleAuthorsView"
    ),
);

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <HomePageView />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<Loading />}>
                <SignInPage />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Loading />}>
                <SignUpPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loading />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="author/:id"
            element={
              <Suspense fallback={<Loading />}>
                <SingleAuthorsView />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
