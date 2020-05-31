import React from "react";
import createRouter from "./Routes";

export default function Base() {
  const Routes = createRouter();

  return <Routes />;
}
