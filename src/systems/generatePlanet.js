import "./generatePlanet.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MiniPlanet } from "../components/miniplanet";

import { motion } from "framer-motion";
import { gsap } from "gsap";
export const GeneratePlanet = () => {
  function useQuery() {
  return new URLSearchParams(useLocation().search);
  
}
useEffect(() => {
  console.log(planetType, planetName)
})
const query = useQuery();
const planetType = query.get("className");
  const planetName = query.get("name");

  return <div>
  </div>;
};
