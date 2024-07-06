import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../constants/regex";
import { login } from "../api/auth";
import { AxiosError } from "axios";

const LoginForm = () => {
  type LoginFormType = {
    email: string;
    password: string;
  };

  const { register, handleSubmit, formState, setError } =
    useForm<LoginFormType>({
      mode: "all",
    });

  const { errors } = formState;

  const onSubmit = async (data: LoginFormType) => {
    try {
      await login(data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setError("root", { message: error.response?.data });
      } else {
        // Handle other types of errors
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-h-screen flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5  text-gray-600 ">
            Login
          </h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-3 py-7">
              <label
                htmlFor="email"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                E-mail
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className=" mb-3 text-red-500 text-sm ml-0">
                {errors.email?.message}
              </p>
              <label
                htmlFor="password"
                className="font-semibold text-sm text-gray-600 pb-1 block"
              >
                Password
              </label>
              <input
                type="password"
                className="border rounded-lg px-5 py-2 mt-1 mb-5 text-sm w-full"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
              <p className=" mb-3 text-red-500 text-sm ml-0">
                {errors.password?.message}
              </p>
              <button
                type="submit"
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <div className="text-center">
                <p className=" mb-3 text-red-500 text-sm ml-0">
                  {errors.root?.message}
                </p>
              </div>
            </div>
            <div className="py-5">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center flex mx-14 whitespace-nowrap">
                  {" "}
                  <p>Don't have an account?</p>{" "}
                  <Link className="text-blue-500" to="/register">
                    <span className="px-1">Register</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap"></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
