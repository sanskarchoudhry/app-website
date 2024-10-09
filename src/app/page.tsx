// import Link from "next/link";
import Image from "next/image";
// import TrendingCard from "../../public/components/TrendingCard";
// import { website_info_data } from "../../public/json_data";

// export default function Home() {
//   return (
//     <main className="bg-bg-primary flex flex-col justify-center items-center">
//       <header className=" py-16 max-w-[50rem] min-w-[40rem]">
//         <nav className="w-full px-8">
//           <ul className="flex flex-row items-center justify-between">
//             {menuItems.map(({ menuLink, menuTitle }, index) => {
//               return (
//                 <Link key={index} href={menuLink}>
//                   <li className=" hover:text-pink-primary font-satoshi-bold">
//                     {menuTitle}
//                   </li>
//                 </Link>
//               );
//             })}
//           </ul>
//         </nav>
//       </header>
//       <section className="max-w-[90rem] min-w-[75rem] bg-[#697565] bg-opacity-10 rounded-[40px] flex">
//         <section className="w-3/5 flex flex-col">
//           <div>
//             <h1 className=" text-5xl font-satoshi-black">LOGO</h1>
//           </div>
//           <div>
//             <div className=" text-24 font-satoshi-bold">
//               <span className="">Looking</span> for a movie to watch{" "}
//               <span>?</span>
//             </div>
//             <p className="text-24 font-satoshi-regular">
//               Search for your genre:
//             </p>
//           </div>

//           <form action="" className="flex gap-8">
//             <input
//               type="text"
//               name="search"
//               placeholder="Search"
//               className="h-12 rounded-xl px-2 py-1 text-base placeholder:text-[#686D76] placeholder:font-satoshi-regular font-satoshi-medium text-[#373A40] outline-none w-[80%]"
//             />
//             <button className=" bg-pink-primary rounded-xl flex items-center justify-center h-12 w-12 ">
//               <Image
//                 src="/icons/magnifying-glass.svg"
//                 height={30}
//                 width={30}
//                 alt="search-icon"
//               />
//             </button>
//           </form>

//           <Link href={"/home"}>
//             <button className="flex rounded-2xl bg-pink-primary text-[#000] text-24 font-satoshi-black w-[23rem] py-4 px-10 justify-between items-center">
//               Continue to website
//               <Image
//                 src="/icons/right-arrow.svg"
//                 alt="arrow-icon"
//                 height={30}
//                 width={30}
//               />
//             </button>
//           </Link>
//         </section>
//         <section className="relative">
//           <div className="h-full w-full relative rounded-r-[40px]">
//             <Image
//               src="/bg-movie-collage.png"
//               width={1920}
//               height={1080}
//               alt="bg-image"
//               className="object-cover rounded-r-[40px] h-full"
//             />
//             <div className="bg-bg-primary h-full w-full absolute bg-opacity-55 -translate-y-[100%] rounded-r-[40px]"></div>
//           </div>
//         </section>
//       </section>
//       <section className="flex max-w-[90rem] justify-center gap-32 mt-14">
//         <section className=" flex flex-col w-[60rem] gap-20">
//           <div className="flex flex-col gap-20">
//             <h1 className="text-24 font-satoshi-bold">
//               Welcome to Movie Recommender
//             </h1>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
//               temporibus dolores fugit eaque deserunt deleniti dolorem optio,
//               fugiat ipsam praesentium minus obcaecati autem neque vitae
//               voluptate provident quia laboriosam facere aperiam voluptates ipsa
//               illum eligendi alias nisi. Ut voluptate optio ea eum minima
//               laboriosam facilis eius! Similique vel at reiciendis facilis
//               repudiandae. Placeat veritatis pariatur accusamus tempora facere
//               vero minima perferendis ullam tenetur explicabo possimus
//               laboriosam sint rem ipsa autem, animi beatae natus non a. Facere
//               laudantium optio id incidunt?
//             </p>
//           </div>

//           <div className="flex flex-col gap-20">
//             {website_info_data.map((data, index) => {
//               return (
//                 <div key={index} className="flex flex-col gap-20">
//                   <h2 className="text-20 font-satoshi-bold">{data.heading}</h2>
//                   <p className="text-16 font-satoshi-regular">{data.text}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//         {/* <section className="w-1/4">
//           <h1 className="text-24 font-satoshi-bold">Trending Posts</h1>
//           <TrendingCard />
//         </section> */}
//       </section>
//     </main>
//   );
// }

// const menuItems = [
//   {
//     menuTitle: "Home",
//     menuLink: "/home",
//   },
//   {
//     menuTitle: "Movies",
//     menuLink: "/movie",
//   },
//   {
//     menuTitle: "TV Shows",
//     menuLink: "/tv",
//   },
//   {
//     menuTitle: "Most Popular",
//     menuLink: "/most-popular",
//   },
//   {
//     menuTitle: "Top airing",
//     menuLink: "/top-airing",
//   },
// ];

import React from "react";
// import SearchBox from "../../public/components/SearchBox";

export default function Page() {
  return (
    <main className="flex flex-col">
      <section className="relative flex h-screen w-screen">
        <Image
          height={911}
          width={1620}
          src="/netflix-collage.jpg"
          alt="movie-collage-background"
          className=" object-cover h-full w-full"
        />
        <section className="absolute h-screen w-screen bg-black-primary bg-opacity-70 flex flex-col justify-center items-center">
          <div>
            <h1 className=" font-archivoBlack-regular text-64 z-30 bg-opacity-100">
              What are you Looking for TODAY?
            </h1>
            <h2 className=" font-archivoBlack-regular text-32">
              Search for the genre you wanna watch
            </h2>
          </div>
          {/* <SearchBox /> */}
          <div className=" w-[40rem] flex items-center justify-between">
            <input
              type="text"
              className=" h-14 w-[29rem] outline-none px-4  placeholder:text-grey-secondary placeholder:text-20 text-24 text-grey-primary"
              placeholder="Search for genre"
            />
            <button className=" hover:bg-button-primary-blue bg-button-secondary-blue focus:bg-button-primary-blue active:bg-button-primary-blue h-full w-[10rem] text-24">
              Search
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
