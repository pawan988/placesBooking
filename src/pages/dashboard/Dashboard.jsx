import React, { useEffect, useState } from "react";
import { getPlacesApi } from "../../services/apis/places";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import CitiesCard from "./CitiesCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Dashboard = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [placesData, setPlacesData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPlacesApi(currentPage);
        setPlacesData(response?.data?.results);
      } catch (error) {
        setError(error.response.data.detail);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNavigate = () => {
    navigate("/places");
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="dashboard-main ">
      <div className="flex justify-between px-3 items-center">
        <div>
          <p className="text-2xl font-semibold">Places</p>
          <p className="text-lg font-sm">List of total places available</p>
        </div>
        <button
          type="submit"
          className="text-white bg-[#d92733] hover:bg-[#c91a26] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm   px-5 py-2.5 text-center"
          onClick={handleNavigate}
        >
          Add New Place
        </button>
      </div>

      <div className="px-3 py-9 grid 2xl:grid-cols-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div class="max-w-sm pt-6 pb-12 px-6 bg-white border border-[#3876f2] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
          <div className="flex justify-center items-center flex-col gap-1">
            <p className="text-2xl font-semibold">{placesData?.total_places}</p>
            <p className="text-lg font-sm">Total Places</p>
            <div className="absolute bottom-0 bg-[#64b8d1] w-full rounded-b-lg flex justify-center items-center py-1.5 cursor-pointer">
              View Full List
            </div>
          </div>
        </div>

        <div class="max-w-sm pt-6 pb-12 px-6 bg-white border border-[#28c9b4] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
          <div className="flex justify-center items-center flex-col gap-1">
            <p className="text-2xl font-semibold">{placesData?.total_cities}</p>
            <p className="text-lg font-sm">Total Cities</p>
            <div className="absolute bottom-0 bg-[#28c9b4] w-full rounded-b-lg flex justify-center items-center py-1.5 cursor-pointer">
              Views Groups
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-3 items-center py-4">
        <div>
          <p className="text-2xl font-semibold">Cities</p>
          <p className="text-lg font-sm">List of all cities</p>
        </div>
        <button
          type="submit"
          className="text-white bg-[#d92733] hover:bg-[#c91a26] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm   px-5 py-2.5 text-center "
        >
          Add Cities
        </button>
      </div>

      <div className="flex justify-between px-3 items-center py-4">
        <SearchBar setPlacesData={setPlacesData} />
        <div className="border border-gray-400 px-4 py-1 bg-slate-300 rounded-md flex justify-center items-center gap-2">
          <p className="text-lg">10 of {placesData?.total_cities}</p>

          <button
            onClick={prevPage}
            disabled={currentPage <= 1}
            className={`${
              currentPage <= 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <MdKeyboardArrowLeft size={23} />
          </button>
          <button onClick={nextPage}>
            <MdKeyboardArrowRight size={23} />
          </button>
        </div>
      </div>

      <CitiesCard placesData={placesData} />
    </div>
  );
};

export default Dashboard;
