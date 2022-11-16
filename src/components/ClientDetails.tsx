import { type ChangeEvent, useState } from "react";
import { type ClientDetailsInterface } from "../types";

const ClientDetails = () => {
  const [clientDetails, setClientDetails] = useState<ClientDetailsInterface>({
    name: "",
    country: "",
    email: "",
    otp: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientDetails({ ...clientDetails, [name]: value });
    console.log(clientDetails);
  };

  return (
    <>
      {" "}
      <div className="container flex w-1/2 flex-col p-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={clientDetails?.name || ""}
          onChange={handleInput}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={clientDetails?.country}
          onChange={handleInput}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={clientDetails?.email}
          onChange={handleInput}
        />
        <input
          type="text"
          name="otp"
          placeholder="OTP"
          value={clientDetails?.otp}
          onChange={handleInput}
        />
      </div>
      <div className="container flex w-1/2 justify-center">
        <button className="">Request</button>
      </div>
    </>
  );
};

export default ClientDetails;
