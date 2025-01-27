import Loading from "@/components/Loading/Loading";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { MAIN_PATHS } from "../index.enum";


const HomePageView = lazy(() => import("../../../pages/Home/view"))
const AboutPage = lazy(() => import("../../../pages/About/AboutPage"))
const WritePage = lazy(() => import("../../../pages/Write/index"))
const SingleAuthorsPage = lazy(() => import("../../../pages/Home/components/Additionals/Authors/single/SingleAuthorsView"))
const ProfilePage = lazy(()=>import("../../../pages/Profile"))

export const MAIN_ROUTE = [
    <Route
            path={MAIN_PATHS.HOME}
            element={
              <Suspense fallback={<Loading />}>
                <HomePageView />
              </Suspense>
            }
    />,
    <Route
            path={MAIN_PATHS.ABOUT}
            element={
              <Suspense fallback={<Loading />}>
                <AboutPage />
              </Suspense>
            }
          />,
          <Route
            path={MAIN_PATHS.WRITE}
            element={
              <Suspense fallback={<Loading />}>
                <WritePage />
              </Suspense>
            }
          />,
          <Route
            path={MAIN_PATHS.AUTHOR + "/:id"}
            element={
              <Suspense fallback={<Loading />}>
                <SingleAuthorsPage />
              </Suspense>
            }
          />,
          <Route
            path={MAIN_PATHS.PROFILE}
            element={
              <Suspense fallback={<Loading />}>
                  <ProfilePage />
              </Suspense>
            }
          />
    
            
]