import React from "react";
import Header from "../components/Header";
import ReactSwiper from "../components/ReactSwiper";
import Cart from "../components/CartCourse";
import { FcManager } from "react-icons/fc";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


function Home() {
  const cartData = [
    {
      courseName: "Frontend Developement",
      courseContent: "HTML, CSS, JavaScript,React",
      img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/232998177/original/5fbaf41f751d591127240adef8b6ec62a3f861c8/be-front-end-web-developer-in-react-js.png",
      route: "/frontendreact",
    },
    {
      courseName: "Backend Development",
      courseContent: "Node.js, Express, Mongodb",
      img: "https://th.bing.com/th/id/OIP.3pPJQKaUEdqQUjkWge0M3gHaEK?rs=1&pid=ImgDetMain",
      route: "/backendnodejs",

    },
    {
      courseName: ".Net Develeopment",
      courseContent: "HTML, CSS, JavaScript",
      img: "https://th.bing.com/th/id/OIP.qpLzCY94b9y4aWbvkKNxjwHaFV?rs=1&pid=ImgDetMain",
      route: "/dotnetdevelopement",

    },
    {
      courseName: "App Development",
      courseContent: "iOS, Android, Flutter",
      img: "https://purpletutor.com/wp-content/uploads/2023/02/App-development.png",
      route: "/appdevelopement",

    },
    {
      courseName: "Digital Marketing Fundamentals",
      courseContent: "SEO, SEM, Social Media Marketing",
      img: "https://digitalquest.in/wp-content/uploads/2023/10/Digital-Marketing-course-in-hyderabad-600x400.jpg",
      route: "/digitalmarketing",

    },
    {
      courseName: "Python Development",
      courseContent: "Python, Django, Flask",
      img: "https://th.bing.com/th/id/OIP.wXn88A-eYmSm0hx-bbsh6AHaEK?rs=1&pid=ImgDetMain",
      route: "/pythondevelopement",

    },
    {
      courseName: "UI/UX Design Fundamentals",
      courseContent:
        "User Research, Wireframing, Prototyping, UI Design Principles",
      img: "https://www.whitepeakdigital.com/wp-content/uploads/UX-vs-UI.png",
      route: "/uiuxdesign",

    },
    {
      courseName: "HR Management Fundamentals",
      courseContent: "Recruitment, Performance Management, Training and Development, HR Policies",
      img: "https://th.bing.com/th/id/OIP.9yBAM10QmaZYFT3CGqem_gAAAA?rs=1&pid=ImgDetMain",
      route: "/hemanagement",

    }
  ];
  return (
    <div className="mt-[73px]  ">
      <ReactSwiper />
      <div className="mt-10 flex items-center justify-center font-serif">
        <span className="text-4xl font-semibold">Our Courses</span>
      </div>
      <div className=" px-40 mt-16 items-center justify-center">
        <div className="bg-whit mt-4 gap-9 grid items-center justify-center  lg:grid lg:grid-cols-4 ">
          {cartData.map((item,index) => (
            <Link to={item.route}>
            <Cart
              img={item.img}
              courseName={item.courseName}
              courseContent={item.courseContent}
              route={item.route}
              key={index}
            />
             </Link>
          ))}
        </div>
      </div>
      <div className="w-full py-10 mt-10  flex flex-col bg-slate-100 ">
        <div className="px-5 lg:px-40 ">
          <h6 className=" text-2xl lg:text-4xl font-normal">
            Why to join Webgurukul
          </h6>
          <p className="text-lg mt-6 lg:mt-0 lg:leading-10">
            Learn from step-by-step instructions combined.
          </p>
        </div>
        <div className="px-5  lg:px-40 mt-10 lg:flex lg:justify-between">
          <div className=" flex flex-col gap-2">
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p>Expert Profesional Trainers.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> Company Training Certification.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> 1 Year of Membership.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> Live and Practical Projects.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> Daily doubt Solving Session.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> Interview Preparation.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p>Personal Attention.</p>
            </div>
          </div>
          <div className=" px-10 lg:px-0 mt-10 lg:mt-0 lg:flex lg:gap-20">
            <div className="flex flex-col gap-6">
              <div className="flex justify-evenly cursor-pointer gap-1 lg:gap-8 py-4 px-1 lg:px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="text-xl">Practice session</button>
                <FaAngleRight size={30} />
              </div>
              <div className="flex justify-evenly cursor-pointer gap-1 lg:gap-8 py-4 px-1 lg:px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="text-xl">Live Project Work</button>
                <FaAngleRight size={30} />
              </div>
              <div className="flex justify-evenly cursor-pointer gap-1 lg:gap-8 py-4 px-1 lg:px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="text-xl">Placement Assistence</button>
                <FaAngleRight size={30} />
              </div>
            </div>
            <div className=" mt-6 lg:mt-0 flex flex-col gap-6">
              <div className="flex justify-evenly cursor-pointer gap-1 lg:gap-8 py-4 px-1 lg:px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="text-xl">Exprience Trainer </button>
                <FaAngleRight size={30} />
              </div>
              <div className="flex justify-evenly cursor-pointer gap-1 lg:gap-8 py-4 px-1 lg:px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="text-xl">IT Corporate Training </button>
                <FaAngleRight size={30} />
              </div>
              <div className="flex justify-evenly cursor-pointer gap-1 lg:gap-8 py-4 px-1 lg:px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="text-xl">Free Study Material </button>
                <FaAngleRight size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
