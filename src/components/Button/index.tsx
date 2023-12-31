"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Button = ({ id }: any) => {
  const router = useRouter();
  const handleClikc = () => {
    router.push(`users/${id}`);
  };
  return (
    <div>
      <button
        style={{ background: "red", cursor: "pointer" }}
        onClick={handleClikc}
      >
        GO to user
      </button>
    </div>
  );
};

export default Button;
