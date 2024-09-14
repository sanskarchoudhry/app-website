import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-bg-primary flex flex-col justify-center items-center">
      <header className=" py-16 max-w-[50rem] min-w-[40rem]">
        <nav className="w-full px-8">
          <ul className="flex flex-row items-center justify-between">
            {menuItems.map(({ menuLink, menuTitle }, index) => {
              return (
                <Link key={index} href={menuLink}>
                  <li className=" hover:text-pink-primary font-satoshi-bold">
                    {menuTitle}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </header>
      <section className="max-w-[90rem] min-w-[75rem] bg-[#697565] bg-opacity-10 rounded-[40px] flex">
        <section className="w-3/5 flex flex-col">
          <div>
            <h1 className=" text-5xl font-satoshi-black">LOGO</h1>
          </div>

          <form action="">
            <input
              type="text"
              value="searchBar"
              name="searchBar"
              className="h-12 rounded-xl"
            />
          </form>
        </section>
        <section className="relative">
          <div className="h-full w-full relative rounded-r-[40px]">
            <Image
              src="/bg-movie-collage.png"
              width={1920}
              height={1080}
              alt="bg-image"
              className="object-cover rounded-r-[40px] h-full"
            />
            <div className="bg-bg-primary h-full w-full absolute bg-opacity-55 -translate-y-[100%] rounded-r-[40px]"></div>
          </div>
        </section>
      </section>
    </main>
  );
}

const menuItems = [
  {
    menuTitle: "Home",
    menuLink: "/home",
  },
  {
    menuTitle: "Movies",
    menuLink: "/movie",
  },
  {
    menuTitle: "TV Shows",
    menuLink: "/tv",
  },
  {
    menuTitle: "Most Popular",
    menuLink: "/most-popular",
  },
  {
    menuTitle: "Top airing",
    menuLink: "/top-airing",
  },
];
