import Landing from "../Presentationals/Landing";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className={styles.container}>
      <Landing />
      {/* <Bordeaux /> */}
    </div>
  );
}
