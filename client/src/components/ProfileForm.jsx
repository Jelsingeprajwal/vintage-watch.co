import React, { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { useEffect } from "react";
import axios from "axios";

const ProfileForm = ({ handleEditBtn }) => {
  const { user } = useContext(UserContext);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [gender, setGender] = useState("");
  const [houseNumber, setHouseNumber] = useState(user.houseNumber);
  const [street, setStreet] = useState(user.street);
  const [city, setCity] = useState(user.city);
  const [province, setProvince] = useState(user.province);
  const [postalCode, setPostalCode] = useState(user.postalCode);
  const [country, setCountry] = useState(user.country);
  const [dob, setDob] = useState(user.dob);
  //   console.log(email);
  useEffect(() => {
    axios.get("/api/profile").then((response) => {
      const data = response.data;
      // console.log(data);
      // setUser(data);
    });
  }, []);
  // console.log("ProfileForm", user);
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      houseNumber,
      street,
      city,
      province,
      postalCode,
      country,
      dob,
    };
    console.log("Profile Form", formData);
    handleEditBtn();
    const response = await axios.post("/profile", formData);
  };
  return (
    <div>
      <h1>Edit Profile</h1>
      <form action="" onSubmit={handleSubmit} className="">
        {/* First Name & Last Name */}
        <div className={`flex mb-8 gap-[14px] `}>
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
              value={user.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
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
              value={user.lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------ */}
        {/* Email & Phone Number */}
        <div className={`flex mb-8 gap-[14px] `}>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor="email"
              className="font-semibold uppercase font-josefinSans"
            >
              Email
            </label>
            <input
              required={true}
              type="text"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
              className="font-semibold uppercase font-josefinSans"
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder={
                user.phoneNumber ? user.phoneNumber : `Enter your phone number`
              }
              value={user.phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
        </div>
        {/* Address */}
        <h1 className="font-semibold uppercase font-josefinSans mb-8">
          Address
        </h1>
        {/* H no, street and city */}
        <div className={`flex mb-8 gap-[14px] `}>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
              className="font-semibold uppercase font-josefinSans"
            >
              House No.
            </label>
            <input
              type="text"
              placeholder={
                user.address?.houseNumber
                  ? user.address?.houseNumber
                  : `House no.`
              }
              value={user.address?.houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
              className="font-semibold uppercase font-josefinSans"
            >
              Street
            </label>
            <input
              type="text"
              placeholder={
                user.address?.street ? user.address?.street : `Street`
              }
              value={user.address?.street}
              onChange={(e) => setStreet(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
              className="font-semibold uppercase font-josefinSans"
            >
              City
            </label>
            <input
              type="text"
              placeholder={user.address?.city ? user.address?.city : `City`}
              value={user.address?.city}
              onChange={(e) => setCity(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
        </div>
        {/* State, Postal code and country */}
        <div className={`flex mb-8 gap-[14px] `}>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
              className="font-semibold uppercase font-josefinSans"
            >
              State
            </label>
            <input
              type="text"
              placeholder={
                user.address?.province ? user.address?.province : `State`
              }
              value={user.address?.province}
              onChange={(e) => setProvince(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
              className="font-semibold uppercase font-josefinSans"
            >
              Postal Code
            </label>
            <input
              type="text"
              placeholder={
                user.address?.postalCode
                  ? user.address?.postalCode
                  : `Postal Code`
              }
              value={user.address?.postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
              className="font-semibold uppercase font-josefinSans"
            >
              Country
            </label>
            <input
              type="text"
              placeholder={
                user.address?.country ? user.address?.country : `Country`
              }
              value={user.address?.country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
        </div>

        <div className={`flex mb-8 gap-[14px] `}>
          <div className={`flex flex-col w-full gap-4 `}>
            <label
              htmlFor=""
              className="font-semibold uppercase font-josefinSans"
            >
              Date Of Birth
            </label>
            <input
              type="date"
              placeholder={user.dob ? user.dob.dob : ``}
              value={user.dob}
              onChange={(e) => setDob(e.target.value)}
              className="border-b border-b-black-400 pb-1 placeholder:text-black-400"
            />
          </div>
        </div>
        {/* Submit/Cancel Btn */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="h-10 w-[170px] mt-6 bg-peach-900  font-medium rounded-[5px] text-white"
          >
            Save
          </button>
          {/* <button
            type="button"
            className="h-10 w-[170px] mt-6 bg-peach-900  font-medium rounded-[5px] text-white"
          >
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;

// {
//   houseNumber: String,
//   street: String,
//   city: String,
//   state: String,
//   postalCode: String,
//   country: String,
// },

// <div className={`flex flex-col w-full gap-4 `}>
//             <label
//               htmlFor="email"
//               className="font-semibold uppercase font-josefinSans"
//             >
//               Email
//             </label>
//             <input
//               type="text"
//               name="email"
//               value={user.email}
//               onChange={(ev) => setEmail(ev.target.value)}
//               className=" border-b border-b-black-400 pb-1 placeholder:text-black-400"
//               placeholder={user.email ? user.email : `Email`}
//             />
//           </div>
