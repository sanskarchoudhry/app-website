import Image from "next/image";
import { trendingMoviesData } from "../public/json_data";

export default function TrendingMovieCard(data: trendingMoviesData) {
  return (
    <div className=" flex flex-col gap-8 items-center relative">
      <Image
        src={data.imagePath}
        alt="movie-poster"
        height={100}
        width={100}
        className=" w-[14rem] h-[18rem] object-cover"
      />
      <p className=" text-20 text-white-primary">{data.title}</p>
      <p className=" z-30 absolute text-[4rem] -top-[15%] left-0 drop-shadow-2xl">
        #{data.rank}
      </p>
    </div>
  );
}
