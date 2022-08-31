import LandingPage from "../components/landing-page/landingpage";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HCIS Scholarship | Sun Education Group</title>
        <link rel="icon" href="/images/icon/fav.png" />
        <meta
          name="HCIS Scholarship x Sun Education Group"
          content="Best scholarship from Hwa Chong International School, exclusively available only at SUN Education. Make sure you check all the application details and apply now!"
        />
      </Head>
      <LandingPage />
    </div>
  );
}
