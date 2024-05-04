import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../services/apis/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          username: values.email,
          password: values.password,
        };
        const response = await loginApi(payload);
        const responseData = response.data;
        if (responseData) {
          localStorage?.setItem("auth_token", responseData?.token);
          localStorage?.setItem("name", responseData?.name);
          navigate("/dashboard");
        }
        resetForm();
      } catch (error) {
        setError(error.response.data.detail);
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="rounded-2xl p-4 w-[95%] md:w-[50%] lg:w-[30%]"
        style={{ boxShadow: "0px 0px 10px  10px lightGray" }}
      >
        <div className="text-lg font-medium flex justify-center items-center">
          Welcome
        </div>
        <form onSubmit={loginFormik.handleSubmit}>
          <div className="grid gap-6 mb-6 mt-4">
            <div>
              <label
                htmlFor="Username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="email"
                {...loginFormik.getFieldProps("email")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
              />
              {loginFormik.touched.email && loginFormik.errors.email ? (
                <div className="text-rose-800">{loginFormik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...loginFormik.getFieldProps("password")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter password"
              />
              {loginFormik.touched.password && loginFormik.errors.password ? (
                <div className="text-rose-800">
                  {loginFormik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="flex justify-center items-center gap-3">
              <input type="checkbox" id="check" name="check" value="check" />
              <label htmlFor="check">Remember me</label>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <button
              type="submit"
              className="text-white bg-[#14c963] hover:bg-[#11ba5b] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
