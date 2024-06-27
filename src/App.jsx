import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Placement from "./pages/Placement";
import Event from "./pages/Event";
import ContactUs from "./pages/ContactUs";
import ReactSwiper from "./components/ReactSwiper";
import CourseFrontendReact from "./pages/CourseFrontendReact";
import CourseBackendNodeJs from "./pages/CourseBackendNodeJs";
import CourseDotNetDevelopement from "./pages/CourseDotNetDevelopement";
import CourseAppDevelopement from "./pages/CourseAppDevelopement";
import CourseDigitalMarketing from "./pages/CourseDigitalMarketing";
import CoursePythonDevelopement from "./pages/CoursePythonDevelopement";
import CourseUiUxDesign from "./pages/CourseUiUxDesign";
import CourseHRManagement from "./pages/CourseHRManagement";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/placement",
          element: <Placement />,
        },
        {
          path: "/event",
          element: <Event />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        },
        {
          path:"/frontendreact",
          element:<CourseFrontendReact/>
        },
        ,
        {
          path:"/backendnodejs",
          element:<CourseBackendNodeJs/>
        },,
        {
          path:"/dotnetdevelopement",
          element:<CourseDotNetDevelopement/>
        },
        ,
        {
          path:"/appdevelopement",
          element:<CourseAppDevelopement/>
        },
        ,
        {
          path:"/digitalmarketing",
          element:<CourseDigitalMarketing/>
        },
        ,
        {
          path:"/pythondevelopement",
          element:<CoursePythonDevelopement/>
        },
        ,
        {
          path:"/uiuxdesign",
          element:<CourseUiUxDesign/>
        },
        ,
        {
          path:"/hemanagement",
          element:<CourseHRManagement/>
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
