import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm text-white font-bold underline uppercase dark:text-white">
                Hotels
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/hotels-in-shimla-cecil/rooms-suites" className="hover:underline text-white">
                    Shimla 
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/hotels-in-jaipur-rajvilas-resort" className="hover:underline text-white">
                    Jaipur
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/special-offers" className="hover:underline text-white">
                    Offers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm text-white font-bold underline uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Discord Server
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm text-white font-bold underline uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm text-white font-bold underline uppercase dark:text-white">
                Download
              </h2>
              <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    iOS
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Android
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    Windows
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline text-white">
                    MacOS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-black dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white dark:text-gray-300 sm:text-center">
              © 2025{" "}

              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <Link
                href="#"
                className="text-gray-400 hover:text-white font-bold underline dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white font-bold underline dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
