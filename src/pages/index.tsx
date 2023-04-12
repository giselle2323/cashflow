import type { ReactElement } from "react";
import { Fragment, useState } from "react";
import Layout from "../layouts/main";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = (props) => {
  return (
    <>
      <div>
        <h1>Search Playlist</h1>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};


export default Home;
