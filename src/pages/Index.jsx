import Omocard from "../components/Omocard";
import React, { useState } from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Whats from "../components/Whats";
import Line from "../components/Line";

export default function Index() {
  return (
    <div>
      <Hero />
      <Omocard />
      <Info />
      <Whats />
      <Line />
    </div>
  );
}
