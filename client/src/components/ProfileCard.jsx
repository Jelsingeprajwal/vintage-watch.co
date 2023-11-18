const ProfileCard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-[1.9px]">Joseph Morino</h1>
      <div className="mt-9">
        <h1 className="font-bold">Contact Information</h1>
        <div className="flex flex-col gap-1 mt-4">
          <div>
            <b>Email</b>
            <span>
              <span>:</span>
              <span className="ml-12">jelsinge.prajwal@gmail.com</span>
            </span>
          </div>{" "}
          <div>
            <b>Phone</b>
            <span>
              <span>:</span>
              <span className="ml-10">+91 9999999999</span>
            </span>
          </div>{" "}
          <div>
            <b>Address</b>
            <span>
              <span>:</span>
              <ul className="w-[30ch] inline-flex flex-col gap-5 list-decimal list-outside ml-12 ">
                <li>
                  LIGH 201, Near Adithya Bakery, Bharath Nagar Colony, Moosapet,
                  Hyderabad, 500018
                </li>
                <li>
                  LIGH 201, Near Adithya Bakery, Bharath Nagar Colony, Moosapet,
                  Hyderabad, 500018
                </li>
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
              <span className="ml-7">12/12/1212</span>
            </span>
          </div>{" "}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setEditProfile(true)}
        className="h-10 w-[170px] mt-6 bg-peach-900  font-medium rounded-[5px] text-white"
      >
        Edit Profile
      </button>
    </div>
  );
};
