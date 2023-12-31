import React, { FC } from "react";
import style from "./index.module.css";
import Button from "../Button";

type CardUserProps = {
  id?: number;
  name: string;
  userName: string;
  email: string;
  noButton?: any;
};

const CardUser: FC<CardUserProps> = ({
  id,
  name,
  userName,
  email,
  noButton,
}) => {
  return (
    <div className={style.card}>
      <p>{id}</p>
      <h2>{userName}</h2>
      <p>{name}</p>
      <p>{email}</p>

      {!noButton && <Button id={id} />}
    </div>
  );
};

export default CardUser;
