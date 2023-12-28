import React, { FC } from "react";
import style from "./index.module.css";
import Link from "next/link";

type Address = {
  street: string;
  city: string;
  zipcode: number;
};

type UserProps = {
  userName: string;
  name: string;
  email: string;
  address: Address;
};

const Card: FC<UserProps> = ({ userName, name, email, address, }) => {
  return (
    <div className={style.card}>
      <h1>{userName}</h1>

      <p>
        Name:<span className={style.card_span}>{name}</span>
      </p>
      <p>
        Email:<span className={style.card_span}>{email}</span>
      </p>
      <p>
        Address:
        <span className={style.card_span}>{address.street},</span>
      </p>
      <p>
        City:<span className={style.card_span}>{address.city}</span>
      </p>
      <p>
        Zipcode:<span className={style.card_span}>{address.zipcode}</span>
      </p>
    </div>
  );
};

export default Card;
