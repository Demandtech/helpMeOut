"use client";

import React from "react";
import { Input } from "../ui";
import { Search } from "../svgs";

function SearchBar() {
  return (
    <section className="border-b-2">
      <div className="container flex items-center justify-between py-10">
        <div>
          <h2 className="text-black font-bold text-[2rem] font-sora leading-10">
            Hello, John Mark
          </h2>
          <p className="text-lg text-secondary">
            Here are your recorded videos
          </p>
        </div>
        <form className="max-w-sm w-full">
          <Input
            startContent={<Search />}
            radius="sm"
            size="lg"
            placeholder="Search for a particular video"
            className="bg-[#B6B3C624] "
            classNames={{
              input: "placeholder:text-[#C3C3C3]",
            }}
          />
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
