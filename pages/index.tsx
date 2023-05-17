import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session)

  if (status === "loading") {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>読み込み中</h1>
        </main>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className={styles.container}>
        <main className={styles.main}>認証に失敗しました</main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome {session?.user?.email}!!</h1>
      </main>
    </div>
  );
};

export default Home;
