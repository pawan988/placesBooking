import React from "react";
import CityDetailForm from "./Form";

const Places = () => {
  return (
    <div className="">
      {/* ADD CITY TITLE BEGIN */}
      <div className="">
        <p className="text-2xl text-gray-400 font-semibold">ADD CITY</p>
        <p className="text-md text-[#000000] font-sm mt-2">
          Kindly fill up these details
        </p>
      </div>
      {/* ADD CITY TITLE END */}
      {/* IS ACTIVE BEGIN */}
      <div className="flex justify-end items-center mt-6 py-3">
        <div className="flex gap-3">
          <form className="flex gap-2">
            <label htmlFor="isActive">Is Active </label>
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              value="isActive"
            />
            <label htmlFor="isVerified">Is Verified </label>
            <input
              type="checkbox"
              id="isVerified"
              name="isVerified"
              value="isVerified"
            />
          </form>
        </div>
      </div>
      {/* IS ACTIVE END */}
      <CityDetailForm />
    </div>
  );
};

export default Places;
