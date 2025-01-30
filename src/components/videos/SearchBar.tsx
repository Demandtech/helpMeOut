"use client";

import React from "react";
import { Input } from "../ui";
import { Search } from "../svgs";

function SearchBar() {
  return (
    <section className="border-b-2">
      <div className="container flex flex-col lg:flex-row lg:items-center justify-between gap-10 py-10">
        <div>
          <h2 className="text-black font-bold text-2xl lg:text-[2rem] font-sora leading-10">
            Hello, John Mark
          </h2>
          <p className="text-base lg:text-lg text-secondary">
            Here are your recorded videos
          </p>
        </div>
        <form className="max-w-sm w-5/6 ml-auto">
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
