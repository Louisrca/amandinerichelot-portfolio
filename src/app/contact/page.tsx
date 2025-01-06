import React from "react";
import Title from "@/components/Title/Title";

export default function page() {
  return (
    <div>
      <Title title="Contact" />
      <section>
        <p>Contact me at: </p>
        <p>
          <a
            href="mailto:coucou@mail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            email: coucou
          </a>
        </p>
      </section>
    </div>
  );
}
