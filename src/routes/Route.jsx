import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/RootPages/Home/Home";
import SignInForm from "../components/auth/SignInForm";
import SignUpForm from "../components/auth/SignUpForm";
import SignUpFlow from "../components/auth/SignUpFlow";
import FindTravelers from "../Pages/RootPages/FindTravelers/FindTravelers";
import PostTravelPlans from "../Pages/RootPages/PostTravelPlans/PostTravelPlans";
import HowItWorks from "../Pages/RootPages/HowItWorks/HowItWorks";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signInForm",
                element: <SignInForm />,
            },
            {
                path: "/signUpForm",
                element: <SignUpForm />,
            },
            {
                path: "/signUpFLow",
                element: <SignUpFlow />,
            },
            {
                path: "/findTravelers",
                element: <FindTravelers />,
            },
            {
                path: "/postTravelPlans",
                element: <PostTravelPlans />,
            },
            {
                path: "/howItWorks",
                element: <HowItWorks />,
            },
        ]
    }
]);