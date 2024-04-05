import React from "react";

import AboutUs from "./AboutUs";
import Developers from "./Developers";
import Join from "./Join";
import Loading from "./Header";
import Partners from "./Partners";
import Properties from "./Properties";
import Subscribe from "./Subscribe";

export const Home = () => {
  return (
    <>
      <Loading />
      <Partners />
      <Properties />
      <AboutUs />
      <Developers />
      <Join />
      <Subscribe />
    </>
  );
};
