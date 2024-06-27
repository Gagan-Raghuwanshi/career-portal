import React, { useRef, useEffect, useState } from "react";

function QuickEnquiryModel({ openModel }) {
  const modalRef = useRef(null);

  // Function to handle click outside the modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      openModel(); // Call the function passed as prop to close the modal
    }
  };

  // Attach click event listener when component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [data, setData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Phone: "",
    Course: "",
    Time: "",
    Message: "",
  });

  const handleOnChangeForm = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitFormHandleer = (e) => {
    e.preventDefault();
    console.log("data", data);
  };

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-sm w-full h-full fixed z-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white w-[500px] h-[500px]">
        <form action="">
          <div className="justify-end flex">
            <div
              className="text-xl font-semibold bg-white text-black border-2 rounded-full w-8 h-8 flex items-center justify-center border-yellow-500 -mt-7 -mr-7 cursor-pointer"
              onClick={openModel}
            >
              X
            </div>
          </div>
          <p className="border-b-2 text-xl mt-5 px-5 pb-3 text-yellow-600">
            Quick Enquiry Form
          </p>
          <div className="flex flex-col gap-5">
            <div className="mt-5 flex gap-5 justify-center">
              <input
                type="text"
                name="Fname"
                value={data.Fname}
                onChange={handleOnChangeForm}
                placeholder="First Name*"
                className="outline-none text-xl border-b-2"
              />
              <input
                type="text"
                name="Lname"
                value={data.Lname}
                onChange={handleOnChangeForm}
                placeholder="Last Name*"
                className="outline-none text-xl border-b-2"
              />
            </div>
            <div className="mt-5 flex gap-5 justify-center">
              <input
                type="email"
                name="Email"
                value={data.Email}
                onChange={handleOnChangeForm}
                placeholder="Email*"
                className="outline-none text-xl border-b-2"
              />
              <input
                type="number"
                placeholder="Phone No*"
                name="Phone"
                value={data.Phone}
                onChange={handleOnChangeForm}
                className="outline-none text-xl border-b-2"
              />
            </div>
            <div className="mt-5 flex gap-10 mx-5 justify-center">
              <div className="flex">
                <span className="font-semibold text-lg text-gray-400">
                  Select: Course{" "}
                </span>
                <select
                  name="Course"
                  value={data.Course}
                  onChange={handleOnChangeForm}
                  id="cars"
                  className="outline-none border-b-2"
                >
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="Java">Java</option>
                  <option value="C++">C++</option>
                </select>
              </div>
              <div className="flex">
                <span className="font-semibold text-lg text-gray-400">
                  Select: Prefered Time
                </span>
                <select
                  name="Time"
                  value={data.Time}
                  onChange={handleOnChangeForm}
                  id="cars"
                  className="outline-none border-b-2"
                >
                  <option value="09 AM - 11AM">09 AM - 11AM</option>
                  <option value="10 AM - 12AM">10 AM - 12AM</option>
                  <option value="11 AM - 01AM">11 AM - 01AM</option>
                  <option value="12 AM - 02AM">12 AM - 02AM</option>
                </select>
              </div>
            </div>
            <div className="mt-5 flex gap-5 justify-center">
              <input
                type="text"
                placeholder="Message"
                name="Message"
                value={data.Message}
                onChange={handleOnChangeForm}
                className="w-full mx-4 outline-none text-xl border-b-2"
              />
            </div>
            <div className="flex justify-end mr-4">
              <button
                className="py-2 px-6 font-bold text-white bg-yellow-500 rounded-full"
                onClick={submitFormHandleer}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuickEnquiryModel;
