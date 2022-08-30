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
          name="SUN Education Mobile App"
          content="SUN Education Mobile App, The FIRST overseas education app in Indonesia! Dapatkan info beasiswa dan segala info menarik lainnya. DOWNLOAD NOW"
        />
        <meta
          name="SUN Education App"
          content="Temukan berbagai informasi penting dan menarik untuk persiapan studi ke luar negeri-mu! Dapatkan info beasiswa hingga diskon spesial hanya di SUN Education Mobile App."
        />
      </Head>
      <LandingPage />
    </div>
  );
}
