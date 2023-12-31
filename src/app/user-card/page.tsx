"use client";
import Button from "@/components/Button";
import React, { FC } from "react";

type Address = {
  street: string;
  city: string;
  zipcode: number;
};

type UserCardProps = {
  name: string;
  userName: string;
  email: string;
  address: Address;
};

const UserCard: FC<UserCardProps> = ({ name, userName, email, address }) => {
  return (
    <>
      <div>
        <h1>UserName:{userName}</h1>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Address:{address.street}</p>
        <p>City:{address.city}</p>
        <p>ZipCode:{address.zipcode}</p>
      </div>
    </>
  );
};

export default UserCard;
