import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const handleSignUpSubmit = async (ev) => {
    ev.preventDefault();
    const formData = { firstName, lastName, email, password };
    const response = await axios.post(
      "http://localhost:3030/api/signup",
      formData
    );
    setSignedUp(true);
  };
  if (signedUp) {
    return <Navigate to={"/signin"} />;
  }
  return (
    <section className="w-full h-[100vh] flex justify-center items-center">
      <div className="rounded-[5px] px-10 py-16 bg-[#111010] border border-black-400">
        <form onSubmit={handleSignUpSubmit}>
          <div className={`flex mb-8 gap-[14px]`}>
            <div className={`flex flex-col w-full gap-4 `}>
              <label
                htmlFor=""
                className="font-semibold uppercase font-josefinSans"
              >
                First Name
              </label>
              <input
                required={true}
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
              />
            </div>

            <div className={`flex flex-col w-full gap-4 `}>
              <label
                htmlFor=""
                className="font-semibold uppercase font-josefinSans"
              >
                Last Name
              </label>
              <input
                required={true}
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-transparent text-black-200 border-b border-b-isabelline-200 pb-1"
              />
            </div>
          </div>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
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
              htmlFor=""
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
            className="px-24 h-12 outline bg-peach-200 text-black-500 font-medium rounded-[5px] text-xl"
          >
            Join vintage watch.co
          </button>{" "}
          <br />
          {/* <span className="inline-block py-4 text-center w-full ">or</span>{" "}
          <br />
          <button
            disabled
            type="submit"
            className="flex  justify-center items-center gap-4 px-24 h-12 outline bg-peach-200 text-black-500 font-medium rounded-[5px] text-xl"
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

export default SignUp;
// w-[530px] h-[572px]
