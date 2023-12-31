"use client";
import CardUser from "@/components/CardUser";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await res.json();
  return data;
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
        console.log({ users: usersData });
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        justifyContent: "center",
      }}
    >
      {users &&
        users.map((user) => (
          <CardUser
            key={user.id}
            id={user.id}
            name={user.name}
            userName={user.username}
            email={user.email}
          />
        ))}
    </div>
  );
};

export default Users;
