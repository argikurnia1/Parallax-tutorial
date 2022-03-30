import Head from "next/head";
import Image from "next/image";
import Navbar from "./Layout/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
