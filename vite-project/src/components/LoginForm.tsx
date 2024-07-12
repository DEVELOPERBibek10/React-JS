import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../constants/regex";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/authActions";
import { LoginInput } from "../types/myauth";
import { AppDispatch, RootState } from "../redux/store";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<LoginInput>({
    mode: "all",
  });

  const { errors } = formState;
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const onSubmit = async (data: LoginInput) => {
    dispatch(loginUser(data));
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
              <input
                type="submit"
                value={loading ? "Submitting....." : "LOGIN"}
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              />
              <div className="text-center">
                <p className=" mb-3 text-red-500 text-sm ml-0">{error}</p>
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
