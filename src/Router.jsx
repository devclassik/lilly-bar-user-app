import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeSix from "./components/HomeSix/index.jsx";
import HomeSeven from "./components/HomeSeven/index.jsx";
import HomeEight from "./components/HomeEight/index.jsx";
import HomeDark from "./components/HomeDark/index.jsx";
import HomeRtl from "./components/HomeRtl/index.jsx";
import News from "./components/News/index.jsx";
import SingleNews from "./components/News/SingleNews.jsx";
import Service from "./components/Service/index.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Error from "./components/Error/index.jsx";
import AboutUsTwo from "./components/AboutUs/AboutUsTwo.jsx";
import Shops from "./components/Shops/index.jsx";
import ShopDetails from './components/Shops/Details';
import Layout from "./components/Helper/Layout.jsx";
import Login from "./components/Login/index.jsx";
import SignUp from "./components/SignUp/index.jsx";
import ForgotPassword from "./components/ForgetPassword/index.jsx";
import VerifyOtp from "./components/VerifyOtp/index.jsx";
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeThree />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/news/single-news",
        element: <SingleNews />
      },
      {
        path: "/service",
        element: <Service />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/error",
        element: <Error />
      },
      {
        path: "/about-us-another",
        element: <AboutUsTwo />
      },
      {
        path: "/shops",
        element: <Shops />
      },
      {
        path: "/shops/shop-details",
        element: <ShopDetails />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "/verify-otp",
        element: <VerifyOtp />
      },
      {
        element: <ProtectedRoute />, // Wrap all protected routes
        children: [
          {
            path: "/dashboard",
            element: <h1>Welcome to Dashboard</h1>, // Replace with your Dashboard component
          },
          {
            path: "/profile",
            element: <h1>User Profile</h1>, // Replace with your Profile component
          },
        ],
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
        
      </>
  );
}

export default Router;
