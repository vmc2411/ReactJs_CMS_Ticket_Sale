import React from "react";
import Menubar from "../layouts/MenuBar";
import Header from "../layouts/Header";
const Home = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
          Home
        </main>
      </div>
    </>
  );
};
export default Home;
