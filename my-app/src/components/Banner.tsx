import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Avoid letting
            <strong className="text-[#b15efa]"> sensitive </strong>
            info appear in your
            <strong className="text-[#b15efa]"> commits. </strong>
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
            SecureCommit is a{" "}
            <a
              href="https://code.visualstudio.com/"
              className="text-[#b15efa] transition hover:text-[#caa0ef]"
              target="_blank"
            >
              Visual Studio Code
            </a>{" "}
            extension that helps you avoid letting sensitive info appearing in
            your commits.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">

            <Link
              href="/docs"
              className="inline-block rounded border border-[#b15efa] bg-[#b15efa] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:opacity-75"
            >
              Get Started
            </Link>

            <a
              className="flex gap-2 rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="https://github.com/Enzoait/SecureCommit"
              target="_blank"
            >
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Source code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
