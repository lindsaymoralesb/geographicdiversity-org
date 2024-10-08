import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container">
      <hr />
      <p className="opacity-70 text-center my-[1rem]">
        Made by{" "}
        <Link
          href="https://ethereumcr.org/"
          target="_blank"
          className="text-blue-600 underline"
        >
          Ethereum Costa Rica
        </Link>{" "}
        with ❤️
      </p>
    </div>
  );
};

export default Footer;
