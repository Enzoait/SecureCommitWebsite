import Image from "next/image";
import { ThemeToggle } from "./ToggleTheme";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background fixed w-[-webkit-fill-available] z-50 dark:bg-background">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-[#b15efa]">
              <Image src="/logo.png" alt="Home" width={50} height={50} />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-900 hover:text-[#b15efa] transition dark:text-white dark:hover:text-[#b15efa]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-900 hover:text-[#b15efa] transition dark:text-white dark:hover:text-[#b15efa]"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="sm:flex sm:gap-4">
              <a
                className="flex gap-2 rounded-md bg-[#b15efa] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-75"
                href="https://marketplace.visualstudio.com/items?itemName=Enzoait.securecommit"
                target="_blank"
              >
                <Image
                  src={"vscode-alt.svg"}
                  alt=""
                  width={20}
                  height={20}
                ></Image>
                Install from Marketplace
              </a>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
