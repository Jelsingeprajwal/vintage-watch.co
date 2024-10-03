import React, { Fragment, useContext, useState } from "react";
import axios from "axios";
import ProfilePic from "../assets/profile.jpg";
import Footer from "../components/Footer";
import { UserContext } from "../userContext";
import Rolex from "../assets/rolex.png";
import { Navigate } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";
// import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const [subpage, setSubpage] = useState("profile");
  const [redirect, setRedirect] = useState(null);
  const [editProfile, setEditProfile] = useState(false);
  let address = "";
  console.log(user)
  Object.values(user?.address).forEach((element) => {
    address += element + " ";
  });
  const handleSignOut = async () => {
    await axios.post("/signout");
    setRedirect("/");
    setUser(null);
  };
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  const handleEditBtn = (ev) => setEditProfile(!editProfile);
  const handleButton = (ev) => setSubpage(ev.target.value);
  return (
    <Fragment>
      <div className="grid grid-cols-12 mt-20">
        {/* Left column */}
        <div className="col-span-3">
          <div className="flex flex-col">
            <button
              type="button"
              value={"profile"}
              onClick={handleButton}
              className="h-10 max-w-[170px] outline outline-black-400 bg-[#111010]  font-medium rounded-[5px] shadow-small"
            >
              Profile
            </button>
            <button
              type="button"
              value={"myorders"}
              onClick={handleButton}
              className="mt-9 h-10 max-w-[170px] outline outline-black-400 bg-[#111010]  font-medium rounded-[5px] "
            >
              Your Orders
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="mt-9 h-10  max-w-[170px] bg-peach-200 text-black  font-medium rounded-[5px]"
            >
              Sign Out
            </button>
          </div>
        </div>
        {/* Right section */}
        {/* Profile Section */}
        {subpage === "profile" && (
          <div className="col-span-9 tracking-[1.28px] bg-peach-600 text-black flex gap-11 p-6 rounded-[5px]">
            <div className="max-w-[200px] max-h-[200px]">
              <img
                src={ProfilePic}
                alt=""
                className="w-[200px] overflow-hidden h-[200px] object-cover rounded-sm"
              />
            </div>
            {/* Profile Card */}
            {/* {profileContent} */}
            <div className="w-full">
              {!editProfile && (
                <div>
                  <h1 className="text-2xl font-semibold tracking-[1.9px]">
                    {user?.lastName + " " + user?.firstName}
                  </h1>
                  <div className="mt-9">
                    <h1 className="font-bold">Contact Information</h1>
                    <div className="flex flex-col gap-1 mt-4">
                      <div>
                        <b>Email</b>
                        <span>
                          <span>:</span>
                          <span className="ml-12">{user?.email}</span>
                        </span>
                      </div>{" "}
                      <div>
                        <b>Phone</b>
                        <span>
                          <span>:</span>
                          <span className="ml-10">{user?.phoneNumber}</span>
                        </span>
                      </div>{" "}
                      <div>
                        <b>Address</b>
                        <span>
                          <span>:</span>
                          <ul className="w-[30ch] inline-flex flex-col gap-5 list-decimal list-outside ml-12 ">
                            <li>
                              {user?.address || user?.address != null
                                ? `${address}`
                                : "LIGH 201, Near Adithya Bakery, Bharath Nagar Colony, Moosapet, Hyderabad, 500018"}
                            </li>
                            {/* <li>
                              LIGH 201, Near Adithya Bakery, Bharath Nagar
                              Colony, Moosapet, Hyderabad, 500018
                            </li> */}
                          </ul>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Basic Information */}
                  <div className="mt-9">
                    <h1 className="font-bold">Basic Information</h1>
                    <div className="flex flex-col gap-1 mt-4">
                      <div>
                        <b>Gender</b>
                        <span>
                          <span>:</span>
                          <span className="ml-9">Male</span>
                        </span>
                      </div>{" "}
                      <div>
                        <b>Birthday</b>
                        <span>
                          <span>:</span>
                          <span className="ml-7">{user?.dob}</span>
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleEditBtn()}
                    className="h-10 w-[170px] mt-6 bg-peach-900  font-medium rounded-[5px] text-white"
                  >
                    Edit Profile
                  </button>
                </div>
              )}
              {editProfile && <ProfileForm handleEditBtn={handleEditBtn} />}
            </div>
          </div>
        )}

        {/* My Orders Section */}
        {subpage === "myorders" && (
          <div className="tracking-[1.92px] col-span-9 ">
            {" "}
            <h1 className="text-2xl font-medium ">Your Orders</h1>
            <div className="mt-11 grid gap-5">
              {[1, 2, 3, 4].map((data) => (
                <div
                  key={data}
                  className="flex gap-4 bg-[#111010] border border-black-400 w-max"
                >
                  <div className="bg-isabelline-200 w-[150px] p-10">
                    <img src={Rolex} alt="Watch img" className="w-[70px]" />
                  </div>
                  <div className="pt-3 relative">
                    <h1 className="text-2xl font-semibold tracking-[1.9px] uppercase">
                      Rolex Submariner Ref. 5513
                    </h1>
                    <h3 className="w-[40ch] mt-4">
                      The 1968 Rolex Submariner Ref. 5513 in excellent pre-owned
                      condition...
                    </h3>
                    <p className="absolute bottom-6 right-6">$2199</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default ProfilePage;
