import React, { useContext, useState } from "react";
import { UserContext } from "../userContext";
import { useEffect } from "react";
import axios from "axios";

const ProfileForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [address, setAddress] = useState([]);
  //   console.log(email);
  useEffect(() => {
    axios.get("/api/profile").then((response) => {
      const data = response.data;
      //   setUser(data);
    });
  }, []);
  console.log("ProfileForm", user);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log("Profile Form", {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      gender,
    });
  };
  return (
    <div>
      <h1>Edit Profile</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="text"
          name="first name"
          value={user.firstName}
          onChange={(ev) => setFirstName(ev.target.value)}
        />
        <input
          type="text"
          value={user.lastName}
          onChange={(ev) => setLastName(ev.target.value)}
        />
        <input
          type="tel"
          value={user?.phoneNumber}
          onChange={(ev) => setPhoneNumber(ev.target.value)}
        />
        <input
          type="text"
          value={user?.gender}
          onChange={(ev) => setGender(ev.target.value)}
        />
        <input
          type="text"
          value={user?.address}
          onChange={(ev) => setAddress({ ...ev.target.value })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;
