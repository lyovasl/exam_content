"use client";
import { getPosts } from "@/api/axios";
import User from "./user";
import React from "react";

export const getServerSideProps = ({ context }: any) => {
  console.log(context);
  const { id } = context.params;

  return fetch(`getPosts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        return {
          notFound: true,
        };
      }

      return {
        props: { contact: data },
      };
    })
    .catch((error) => {
      console.error("Error", error);
      return {
        notFound: true,
      };
    });
};

const Contacts = ({ contact }: any) => {
  return (
    <div>
      <h1>Title</h1>
      <User name="name" contact={contact} />
    </div>
  );
};

export default Contacts;

// import { FC, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Detalis from "@/components/UserPageDetalis/Detalis";

// interface UserDetailProps {
//   userId: string;
// }

// const UserDetail: FC<UserDetailProps> = ({ userId }) => {
//   const router = useRouter();

//   useEffect(() => {
//     const { userId } = router.query as UserDetailProps;

//     if (!userId) {
//       return <p>Идентификатор пользователя не предоставлен</p>;
//       console.error("No userId provided");
//       return;
//     }

//     // Вызовите вашу логику с userId здесь
//     console.log("User ID:", userId);
//   }, [router.query]);

//   return <Detalis userID={userId} />;
// };

// export default UserDetail;
// import React from "react";

// export const getStaticPaths = async () => {
//   const res = await fetch(`getPosts`);
//   const data = await res.json();

//   const paths = data.map((user: any) => {
//     return {
//       params: { id: user.id },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: any) => {
//   const id = context.params.id;

//   const res = await fetch(`getPosts${id}`);
//   const data = await res.json();

//   return {
//     props: { user: data },
//   };
// };

// type Props = {};

// const UserDEtalis = ({ user }: any) => {
//   console.log("detalis UserDEtalis", user);
//   return (
//     <div>
//       <p> {user.name}</p>
//     </div>
//   );
// };

// export default UserDEtalis;
