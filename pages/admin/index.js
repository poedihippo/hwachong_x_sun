import Head from "next/head";
import AdminPage from "../../components/admin-page/admin-page";

function Home() {
  return (
    <div>
      <Head>
        <title>HCIS Scholarship | Admin</title>
        <link rel="icon" href="/images/icon/fav.png" />
      </Head>
      <AdminPage />
    </div>
  );
}

export default Home;
