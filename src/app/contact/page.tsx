import React from "react";
import Header from "@/components/Header/Header";

export default function page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Header />

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
      </main>
    </div>
  );
}
