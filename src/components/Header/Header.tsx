import React from "react";
import Title from "../Title/Title";
import Navigation from "../Navigation/Navigation";

export default function Header({ title }: { title: string }) {
  return (
    <header>
      <Title title={title} />
      <Navigation />
    </header>
  );
}
