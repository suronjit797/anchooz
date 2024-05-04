import Layout from "../../components/Layout";
import HomeBanner from "./HomeBanner";
import HomeCard from "./HomeCard";
// import Banner from "./Banner";
import HomeContact from "./HomeContact";
import HomeProduct from "./HomeProduct";

import "./home.css";
export default function Home() {
  return (
    <Layout>
      {/* <Banner /> */}
      <HomeBanner />
      <div className="container">
        <HomeCard />
        <HomeProduct />
        <HomeContact />
      </div>
    </Layout>
  );
}
