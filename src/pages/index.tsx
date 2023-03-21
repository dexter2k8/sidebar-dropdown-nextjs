import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className={styles.content}>
      <Sidebar />
      <h1 style={{ margin: "10px 80px" }}>Dropdown Sidebar</h1>
    </main>
  );
}
