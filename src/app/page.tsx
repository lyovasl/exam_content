import Image from "next/image";
import styles from "./page.module.css";
import Users from "@/components/Users";

export default function Home() {
  return (
    <main className={styles.main}>
      <Users />
    </main>
  );
}
