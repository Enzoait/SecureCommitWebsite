"use client";
import dynamic from "next/dynamic";
import CommandPalette from "./CommandPalette";

const MonacoEditor = dynamic(() => import("../components/MonacoEditor"), {
  ssr: false,
});

export default function Section(props: { textAlign: string }) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          {props.textAlign == "left" ? (
            <>
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>

                  <p className="mt-4 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur doloremque saepe architecto maiores repudiandae amet
                    perferendis repellendus, reprehenderit voluptas sequi.
                  </p>
                </div>
              </div>

              <div>
                <MonacoEditor />
              </div>
            </>
          ) : (
            <>
              <div>
                <CommandPalette/>
              </div>

              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>

                  <p className="mt-4 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur doloremque saepe architecto maiores repudiandae amet
                    perferendis repellendus, reprehenderit voluptas sequi.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
