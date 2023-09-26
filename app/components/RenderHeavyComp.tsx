"use client";
import React, { useState } from "react";
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
//   ssr: false, //disable server side rendering
//   loading: () => <p>Loading...</p>,
// });

const RenderHeavyComp = () => {
  return (
    <div>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "a" }, { name: "b" }];

          const sorted = _.orderBy(users, ["name"]);
        }}
      >
        Show
      </button>
    </div>
  );
};

export default RenderHeavyComp;
