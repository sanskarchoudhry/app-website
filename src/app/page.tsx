// import Link from "next/link";
import Image from "next/image";
import TrendingCard from "../../components/TrendingCard";
import { postsData, website_info_data } from "../../public/json_data";
import Footer from "../../components/Footer";
import MovieSlider from "../../components/MovieSlider";
// import SearchBox from "../../public/components/SearchBox";

export default function Page() {
  return (
    <main className="flex flex-col overflow-x-hidden items-center justify-center">
      <section className="relative flex h-screen w-screen">
        <Image
          height={911}
          width={1620}
          src="/netflix-collage.jpg"
          alt="movie-collage-background"
          className=" object-cover h-full w-full"
        />
        <section className="absolute h-screen w-screen bg-black-primary bg-opacity-70 flex flex-col justify-center items-center gap-24">
          <div>
            <h1 className=" font-archivoBlack-regular text-64 z-30 bg-opacity-100">
              What are you Looking for TODAY?
            </h1>
            {/* <h2 className=" font-archivoBlack-regular text-32">
              Search for the genre you wanna watch
            </h2> */}
          </div>
          {/* <SearchBox /> */}
          <div className=" w-[40rem] flex items-center justify-between">
            <input
              type="text"
              className=" h-14 w-[29rem] outline-none px-4  placeholder:text-grey-secondary placeholder:text-20 text-24 text-grey-primary"
              placeholder="Search for genre"
            />
            <button className="hover:scale-110 active:scale-100 bg-button-secondary-blue  h-full w-[10rem] text-24">
              Search
            </button>
          </div>
        </section>
      </section>
      <section className=" py-10 max-w-[65vw] w-full flex justify-between items-start gap-20">
        <section className=" w-2/3 flex flex-col gap-20">
          <h1 className=" text-32 font-satoshi-bold">What do we do?</h1>

          <div className="flex flex-col gap-12">
            {website_info_data.map((data, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <h3 className=" text-24 font-satoshi-bold">{data.heading}</h3>
                  <p className=" text-20 font-satoshi-regular text-white-secondary">
                    {data.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        <section className=" w-1/3 flex flex-col gap-24">
          <h1 className=" text-32 font-satoshi-bold">Trending Posts</h1>
          <div className=" flex flex-col gap-16 h-[30rem] overflow-y-scroll px-2">
            {postsData.slice(0, 4).map((postData, index) => {
              return (
                <TrendingCard
                  key={index}
                  tag={postData.tag}
                  time={postData.time}
                  postTopic={postData.postTopic}
                  text={postData.text}
                  imagePath={postData.imagePath}
                  username={postData.username}
                  comments={postData.comments}
                />
              );
            })}
          </div>
        </section>
      </section>
      <section className=" flex flex-col gap-8 w-[70vw] overflow-hidden relative mt-14">
        <h1 className="text-32 font-satoshi-bold">Most Liked</h1>
        <MovieSlider />
      </section>
      <Footer />
    </main>
  );
}
