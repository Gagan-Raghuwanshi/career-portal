import React, { useRef, useEffect } from "react";

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

  return (
    <div className="bg-black bg-opacity-30 backdrop-blur-sm w-full h-screen fixed z-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white w-[500px] h-[500px]">
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
              placeholder="First Name*"
              className="outline-none text-xl border-b-2"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="outline-none text-xl border-b-2"
            />
          </div>
          <div className="mt-5 flex gap-5 justify-center">
            <input
              type="email"
              placeholder="Email*"
              className="outline-none text-xl border-b-2"
            />
            <input
              type="number"
              placeholder="Phone No*"
              className="outline-none text-xl border-b-2"
            />
          </div>
          <div className="mt-5 flex gap-10 mx-5 justify-center">
            <div className="flex">
              <span className="font-semibold text-lg text-gray-400">
                Select: Course{" "}
              </span>
              <select name="course" id="cars" className="outline-none border-b-2">
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
              <select name="course" id="cars" className="outline-none border-b-2">
                <option value="">09 AM - 11AM</option>
                <option value="">09 AM - 11AM</option>
                <option value="">09 AM - 11AM</option>
                <option value="">09 AM - 11AM</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex gap-5 justify-center">
            <input
              type="text"
              placeholder="Message"
              className="w-full mx-4 outline-none text-xl border-b-2"
            />
          </div>
          <div className="flex justify-end mr-4">
            <button className="py-2 px-6 font-bold text-white bg-yellow-500 rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickEnquiryModel;
