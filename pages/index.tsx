import type { NextPage } from "next";
import NavBar from "../component/NavBar";
const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <h1>hi</h1>
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
