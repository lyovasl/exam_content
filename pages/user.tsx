import React, { FC } from "react";

type DetalisProps = {
  contact: string;
  name: string;
};

const Detalis: FC<DetalisProps> = ({ contact }) => {
  const { name, email, address }: any = contact || {};
    const { street, city, zipcode }: any = address || {};

  if (!contact) {
    return <div>No Data</div>;
  }
  return (
    <div>
      <p>User: {name}</p>
      <div>{email}</div>
      <div>{address}</div>
      <div>{email}</div>
    </div>
  );
};

export default Detalis;
