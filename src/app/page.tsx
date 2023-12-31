"use client";
import React from "react";
import style from "./page.module.css";
import Link from "next/link";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <h1>Welcome Home Page!!!</h1>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Home;
