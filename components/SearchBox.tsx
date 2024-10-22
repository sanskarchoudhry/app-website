import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBox() {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <section className=" flex h-10">
      <input
        type="text"
        className=" outline-none text-grey-primary placeholder:text-grey-secondary p-2 text-20"
        placeholder="Search"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchText(e.target.value);
        }}
      />
      <Link href={`/movie/${searchText}`}>
        <button className=" bg-bg-secondary w-10 h-full text-24 flex items-center justify-center">
          <FaMagnifyingGlass />
        </button>
      </Link>
    </section>
  );
}
