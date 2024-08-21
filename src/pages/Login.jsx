import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser, LogoutUser } from "../redux/slices/LoginSlice";
import { useDispatch } from "react-redux";
import instance from "../axios";
import Loading from "../components/Loading";
import { Button } from "primereact/button";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const errorRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LogoutUser());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = usernameRef.current;
    const password = passwordRef.current;
    setIsLoading(true);
    const user = new FormData();
    user.append("email", name.value);
    user.append("password", password.value);
    // const user = { email: name.value, password: password.value };
    instance
      .post("/user/login", user)
      .then(function (response) {
        const data = response.data.result;
        setIsLoading(false);
        errorRef.current.innerText = "";

        console.log(response.data.result);

        let saver;

        if (data?.stationId) {
          saver = {
            name: response.data.result.roles[0].name,
            token: data.token,
            stationId: data.stationId,
            accessDb: data.collectionId.collectionName,
          };
          //  dispatch(LoginUser({ name:response.data.result.roles[0].name, token: data.token, stationId: data.stationId }));
        } else {
          saver = {
            name: response.data.result.roles[0].name,
            token: data.token,
            stationId: null,
            accessDb: data.collectionId.collectionName,
          };
          //  dispatch(LoginUser({ name:response.data.result.roles[0].name, token: data.token, stationId: null }));
        }

        dispatch(LoginUser(saver));

        //     if (response.data.result.roles[0].name === "admin"  ) {

        //        navigate("/kyawsan/usermanual");

        //    } else {
        //        navigate("/kyawsan/home")

        //       }

        switch (response.data.result.roles[0].name) {
          case "manager":
            return navigate(`/${data.collectionId.collectionName}/dashboard`);
          case "admin":
            return navigate("/admin/home");
          case "kyaw san":
            return navigate(
              `/${data.collectionId.collectionName}/main-con/dash`
            );
          case "pprd":
            return navigate("/user/choose");
          case "user":
            return navigate("/user/choose");
          default:
            return navigate(`/kyawsan/home`);
        }
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        errorRef.current.innerText = "Something Went Wrong!";
      });
  };

  return (
    <div className="w-screen login_page h-[100svh] bg-black flex items-center  justify-center">
      <div className=" bg-gray-50 w-[600px] h-[300px] p-7 drop-shadow-lg rounded-lg">
        <h3 className="text-xl">
          Please Log in{" "}
          <p
            ref={errorRef}
            id="error_text"
            className=" text-red-500 mt-1 text-md"
          ></p>
        </h3>
        <form
          onSubmit={handleSubmit}
          className=" gap-4 relative mt-5 flex flex-col h-[200px]"
        >
          <input
            ref={usernameRef}
            type="text"
            className=" border-[0.5px] border-gray-600 rounded-md h-[50px] px-2"
            placeholder="username"
          ></input>
          <input
            ref={passwordRef}
            autoComplete="true"
            type="password"
            className=" border-[0.5px] border-gray-600 rounded-md h-[50px] px-2"
            placeholder="password"
          ></input>
          <button
            type="submit"
            className="absolute bottom-[15px] right-0 bg-blue-900 p-3 text-sm rounded-lg text-white"
          >
            Log in
          </button>
        </form>
      </div>
      {/* <section class="bg-red-300 ">
        <div class="flex flex-col  items-center h-[700px] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
            Flowbite
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 bg-bule-300 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  // onClick={handleClick}
                  className=" w-full h-[40px] text-md mt-3 bg-blue-900 flex items-center justify-center gap-2 uppercase text-white rounded-sm hover:bg-blue-800"
                >
                  Sign in
                </Button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      {isLoading ? <Loading /> : ""}
    </div>
  );
}

export default Login;
