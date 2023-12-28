"use client";
import React, { useEffect, useState } from "react";
import { getPosts } from "@/api/axios";
import Card from "../UserCard/Card";
import style from "./index.module.css";
import Link from "next/link";

type Address = {
  street: string;
  zipcode: number;
  city: string;
};

type UsersProps = {
  id: number;
  username: string;
  name: string;
  email: string;
  address: Address;
};

const Users = () => {
  const [userPosts, setUserPosts] = useState<UsersProps[]>([]);

  useEffect(() => {
    getPosts
      .then((res) => {
        const data = res.data;
        setUserPosts(data);
      })
      .catch((err: any) => console.log(err));
  }, [setUserPosts]);

  return (
    <div className={style.user_card}>
      <Link href={`/user`} className={style.user_card}>
        {userPosts.map((user, id) => (
          <Card
            key={id}
            userName={user.username}
            name={user.name}
            email={user.email}
            address={user.address}
          ></Card>
        ))}
      </Link>
    </div>
  );
};

export default Users;
