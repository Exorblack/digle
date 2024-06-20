import Link from "next/link";
import React from "react";

export function NotFound() {
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
      <svg
          className="w-20 h-20 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
        <h1 className="mt-10 text-3xl leading-snug md:text-4xl text-neutral-700 dark:text-neutral-300">
          Error 404 <br /> It looks like something went wrong.
        </h1>
        <p className="mt-8 mb-14 text-[18px] font-normal text-neutral-500 dark:text-neutral-400 mx-auto md:max-w-sm">
         Please try refreshing the page
          or contact us.
        </p>
        <div className="space-x-7">
        <Link href="/">
          <button className="w-full px-4 py-2 bg-neutral-600 text-white rounded md:w-[8rem] dark:bg-neutral-800">
            Back Home
          </button>
        </Link>
        <Link href="/contact">
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded md:w-[8rem] dark:bg-green-800">
            Contact us
          </button>
        </Link>
        </div>

      </div>
    </div>
  );
}

export default NotFound;
