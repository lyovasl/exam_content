// import CardUser from "@/components/CardUser";

// export async function generateStaticParams(context: any) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   return data.map((user: any) => ({
//     params: {
//       id: user.id.toString(),
//     },
//   }));
// }

// async function getUser(id: number) {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     return null;
//   }
// }

// export default async function UsersContent({ params }: any) {
//   const usersInfo = await getUser(params.id);

//   console.log({ usersInfo });
//   return (
//     <CardUser
//       key={usersInfo.id}
//       id={usersInfo.id}
//       name={usersInfo.name}
//       userName={usersInfo.username}
//       email={usersInfo.email}
//       noButton
//     />
//   );
// }

import CardUser from "@/components/CardUser";

export const generateStaticParams = async (context: any) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data.map((user: any) => ({
    params: {
      id: user.id.toString(),
    },
  }));
};

const getUser = async (id: number) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

const UsersContent = async ({ params }: any) => {
  const usersInfo = await getUser(params.id);

  console.log({ usersInfo });
  return (
    <CardUser
      key={usersInfo.id}
      id={usersInfo.id}
      name={usersInfo.name}
      userName={usersInfo.username}
      email={usersInfo.email}
      noButton
    />
  );
};

export default UsersContent;
