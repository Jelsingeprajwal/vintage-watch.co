import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const handleSignInSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const formData = { email, password };
      const { data } = await axios.post(
        "http://localhost:3030/api/signin",
        formData
      );
      // console.table(data);
      setUser(data);
      console.log(user);
      setRedirect(true);
    } catch (err) {
      console.log("login failed");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <section className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-fit  rounded-[5px] px-10 py-16 bg-[#111010] border border-black-400">
        <form onSubmit={handleSignInSubmit}>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor="email"
              className="font-semibold uppercase font-josefinSans"
            >
              Email
            </label>
            <input
              required={true}
              type="email"
              placeholder="Enter your email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
            />
          </div>
          <br />
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor="password"
              className="font-semibold uppercase font-josefinSans"
            >
              Password
            </label>
            <input
              required={true}
              type="password"
              placeholder="Enter your password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
            />
          </div>{" "}
          <br />
          <button
            type="submit"
            className="px-24 mt-8 h-12 outline bg-peach-200 text-black-500 font-medium rounded-[5px] text-xl"
          >
            Join vintage watch.co
          </button>{" "}
          <br />
          <span className="flex  justify-end gap-1 mt-2 text-sm">
            Don't have an accout?{" "}
            <a
              href="/signup"
              className="text-blue-200 underline underline-offset-2"
            >
              {" "}
              sign up
            </a>
          </span>
          {/* <span className="inline-block py-4 text-center w-full ">or</span>{" "}
          <br />
          <button
            disabled
            type="submit"
            className="flex  justify-center items-center gap-4 w-full px-24 h-12 outline bg-peach-200 text-black-500 font-medium rounded-[5px] text-xl"
          >
            <span>
              <img src={GoogleIcon} alt="" />
            </span>
            Sign up with google
          </button> */}
        </form>
      </div>
    </section>
  );
};

export default SignIn;
