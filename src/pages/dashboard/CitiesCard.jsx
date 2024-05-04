import React from "react";

const CitiesCard = ({ placesData }) => {
  return (
    <div className="px-3 py-9 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:grid-cols-6 xl:grid-cols-4 gap-4">
      {placesData &&
        placesData?.cities &&
        placesData?.cities?.length > 0 &&
        placesData?.cities?.map((items, index) => {
          return (
            <div
              key={index}
              class="max-w-sm py-2 px-6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
            >
              <div className="flex items-center gap-3 px-2">
                <div className="flex justify-center items-center w-[50px] bg-gray-300 text-xl font-medium text-[#000000] h-[50px] border border-gray-400 rounded-full">
                  {items?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-xl font-sm text-[#000000]">
                    {items?.name}
                  </p>
                  <p className="text-lg font-sm text-gray-600">
                    {items?.total_places} Places
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default CitiesCard;
