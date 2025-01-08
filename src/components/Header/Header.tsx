import React from "react";
import Title from "../Title/Title";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <header className="mb-12">
      <Title />
      <Navigation />
    </header>
  );
}
