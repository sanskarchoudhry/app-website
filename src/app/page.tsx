import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-bg-primary flex flex-col justify-center items-center">
      <header className=" py-16 max-w-[50rem] min-w-[40rem]">
        <nav className="w-full px-8">
          <ul className="flex flex-row items-center justify-between">
            <Link href={"/home"}>
              <li>Home</li>
            </Link>

            <Link href={"/tv"}>
              <li>TV Shows</li>
            </Link>
            <Link href={"/movie"}>
              <li>Movies</li>
            </Link>
            <Link href={"/most-popular"}>
              <li>Most Popular</li>
            </Link>
            <Link href={"/top-airing"}>
              <li>Top Airing</li>
            </Link>
          </ul>
        </nav>
      </header>
    </main>
  );
}
