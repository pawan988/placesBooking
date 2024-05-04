import React, { useState } from "react";
import { useFormik } from "formik";
import { postPlacesApi } from "../../services/apis/places";
import * as Yup from "yup";
const CityDetailForm = () => {
  const [error, setError] = useState(null);

  const validationSchema = Yup.object().shape({
    cityName: Yup.string().required("City Name is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country Name is required"),
    zipCode: Yup.string().required("Zip Code Name is required"),
    cityDescription: Yup.string().required("City Description Name is required"),
    latitude: Yup.string().required("Longitude is required"),
    longitude: Yup.string().required("Longitude is required"),
  });

  const formik = useFormik({
    initialValues: {
      cityId: "",
      cityName: "",
      state: "",
      country: "",
      zipCode: "",
      cityDescription: "",
      latitude: "",
      longitude: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          city_id: values.cityId,
          name: values.cityName,
          state: "state-11",
          country: values.country,
          zip_code: values.zipCode,
          description: values.cityDescription,
          // image: "",
          lat: values.latitude,
          lon: values.longitude,
          rating: 0,
          views_count: 0,
          is_verified: true,
          is_active: true,
          created_at: "2024-04-12T18:04:24.195810+05:30",
          updated_at: "2024-04-12T18:04:24.195825+05:30",
          tags: ["tag-007", "tag-013"],
          activities: [],
        };
        const response = await postPlacesApi(payload);
        const responseData = response.data;
        if (responseData) {
        }
        resetForm();
      } catch (error) {
        setError(error.response.data.detail);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="border border-gray-300 mt-4 py-3 rounded-md shadow-lg">
          <div className="text-2xl font-medium text-[#000000] px-6 py-0 border-b pb-3 border-gray-300">
            City Details
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center items-center py-3 w-[14%]">
                <p className="fornt-medium text-[#000000]">City Profile</p>
                <div className="w-[70px] h-[70px] rounded-full mt-3 cursor-pointer bg-gray-400 flex justify-center items-center text-[#ffffff] text-lg">
                  City
                </div>
              </div>
              <div className="px-4 py-3 w-[85%]">
                <div className="flex justify-between gap-3">
                  <div className="w-[48%]">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="City Id"
                    >
                      City Id
                    </label>
                    <input
                      className="w-full bg-[#ffffff] text-gray-700 rounded py-3 px-4 mb-3 border border-gray-400"
                      id="cityId"
                      name="cityId"
                      type="text"
                      {...formik.getFieldProps("cityId")}
                      placeholder="City Id"
                    />
                  </div>
                  <div className="w-[48%]">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="City Name"
                    >
                      City Name
                    </label>
                    <input
                      className="w-full bg-[#ffffff] text-gray-700 rounded py-3 px-4 mb-3 border border-gray-400"
                      id="cityName"
                      name="cityName"
                      type="text"
                      {...formik.getFieldProps("cityName")}
                      placeholder="City Name"
                    />
                    {formik.touched.cityName && formik.errors.cityName ? (
                      <div className="text-rose-600">
                        {formik.errors.cityName}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex justify-between gap-3 mt-5">
                  <div className="w-[48%]">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <input
                      className="w-full bg-[#ffffff] text-gray-700 rounded py-3 px-4 mb-3 border border-gray-400"
                      id="state"
                      name="state"
                      type="text"
                      {...formik.getFieldProps("state")}
                      placeholder="State"
                    />
                    {formik.touched.state && formik.errors.state ? (
                      <div className="text-rose-600">{formik.errors.state}</div>
                    ) : null}
                  </div>
                  <div className="w-[48%]">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Country"
                    >
                      Country
                    </label>
                    <input
                      className="w-full bg-[#ffffff] text-gray-700 rounded py-3 px-4 mb-3 border border-gray-400"
                      id="country"
                      name="country"
                      type="text"
                      {...formik.getFieldProps("country")}
                      placeholder="Country"
                    />
                    {formik.touched.country && formik.errors.country ? (
                      <div className="text-rose-600">
                        {formik.errors.country}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex justify-between gap-3 mt-5">
                  <div className="w-[48%]">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Zip Code"
                    >
                      Zip Code
                    </label>
                    <input
                      className="w-full bg-[#ffffff] text-gray-700 rounded py-3 px-4 mb-3 border border-gray-400"
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      {...formik.getFieldProps("zipCode")}
                      placeholder="Zip Code"
                    />
                    {formik.touched.zipCode && formik.errors.zipCode ? (
                      <div className="text-rose-600">
                        {formik.errors.zipCode}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 mt-4 py-3 rounded-md shadow-lg">
          <div className="text-2xl font-medium text-[#000000] px-6 py-0 border-b pb-3 border-gray-300">
            City Description
          </div>
          <div>
            <div className="flex justify-between items-center flex-col md:flex-row">
              <div className="px-4 py-3 w-full">
                <div className="flex justify-between gap-3">
                  <div className="w-full">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="City Description"
                    >
                      City Description
                    </label>
                    <input
                      className="w-full bg-[#ffffff] text-gray-700 rounded py-3 px-4 mb-3 border border-gray-400"
                      id="cityDescription"
                      name="cityDescription"
                      type="text"
                      {...formik.getFieldProps("cityDescription")}
                      placeholder="City Description"
                    />
                    {formik.touched.cityDescription &&
                    formik.errors.cityDescription ? (
                      <div className="text-rose-600">
                        {formik.errors.cityDescription}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 mt-4 py-3 rounded-md shadow-lg">
          <div className="text-2xl font-medium text-[#000000] px-6 py-0 border-b pb-3 border-gray-300">
            Geographical Details
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="px-4 py-3 w-[85%]">
                <div className="flex justify-between gap-3">
                  <div className="w-[48%]">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Latitude"
                    >
                      Latitud
                    </label>
                    <input
                      className="w-full bg-[#ffffff] text-gray-700 rounded py-3 px-4 mb-3 border border-gray-400"
                      id="latitude"
                      name="latitude"
                      type="text"
                      {...formik.getFieldProps("latitude")}
                      placeholder="Latitude"
                    />
                    {formik.touched.latitude && formik.errors.latitude ? (
                      <div className="text-rose-600">
                        {formik.errors.latitude}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-[48%]">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Longitude"
                    >
                      Longitude
                    </label>
                    <input
                      className="w-full bg-[#ffffff] text-gray-700 rounded py-3 px-4 mb-3 border border-gray-400"
                      id="longitude"
                      name="longitude"
                      type="text"
                      {...formik.getFieldProps("longitude")}
                      placeholder="Longitude"
                    />
                    {formik.touched.longitude && formik.errors.longitude ? (
                      <div className="text-rose-600">
                        {formik.errors.longitude}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 px-3">
          <button
            className="border border-green-600 rounded-md text-lg font-medium text-green-600 py-2 px-6 cursor-pointer hover:bg-green-600 hover:text-white"
            type="submit"
          >
            Save City
          </button>
        </div>
      </form>
    </div>
  );
};

export default CityDetailForm;
