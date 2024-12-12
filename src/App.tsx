import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { lazy, Suspense, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import ErrorPage from "./pages/404/Error";
import { supabase } from "./supabase";
import AuthGurad from "./components/RouteGuard/auth";
import { useAtom } from "jotai";
import { userAtom } from "./store/auth";
import ProfileView from "./pages/Profile";
import WritePage from "./pages/Write";

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
  const [user, setUser] = useAtom(userAtom);
  const isUserAuthenticated = !!user;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

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
                <AuthGurad user={isUserAuthenticated}>
                  <SignInPage />
                </AuthGurad>
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Loading />}>
                <AuthGurad user={isUserAuthenticated}>
                  <SignUpPage />
                </AuthGurad>
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
            path="write"
            element={
              <Suspense fallback={<Loading />}>
                <WritePage />
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
          <Route
            path="profile"
            element={
              <Suspense fallback={<Loading />}>
                <AuthGurad user={isUserAuthenticated} isProfilePage>
                  <ProfileView />
                </AuthGurad>
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
