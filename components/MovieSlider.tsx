"use client";
import { useState } from "react";
import { trendingMoviesData } from "../public/json_data";
import TrendingMovieCard from "./TrendingMovieCard";

function MovieSlider() {
  const [sliderTranslateX, setSliderTranslateX] = useState(0);

  const handleRightClick = () => {
    if (sliderTranslateX >= -110) {
      setSliderTranslateX(sliderTranslateX - 14);
    }
  };

  const handleLeftClick = () => {
    if (sliderTranslateX < 0) {
      setSliderTranslateX(sliderTranslateX + 14);
    }
  };

  return (
    <section className=" flex w-[70vw] overflow-hidden relative">
      <div
        className={`flex gap-[4rem] py-8 min-w-[187.5rem] transition-transform duration-300 translate-x-[${sliderTranslateX}rem]`}
      >
        {trendingMoviesData.map(
          (movieData: trendingMoviesData, index: number) => {
            return (
              <TrendingMovieCard
                key={index}
                title={movieData.title}
                rank={movieData.rank}
                imagePath={movieData.imagePath}
              />
            );
          }
        )}
      </div>
      <div
        onClick={handleLeftClick}
        className=" absolute h-[18rem] w-16 top-8 hover:bg-grey-primary text-[3rem] hover:bg-opacity-30 text-[#000] text-center flex justify-center transition-transform items-center font-satoshi-bold cursor-pointer"
      >
        &lt;
      </div>
      <div
        onClick={handleRightClick}
        className=" absolute top-8 right-0 h-[18rem] w-16 hover:bg-grey-primary text-[3rem] hover:bg-opacity-30 text-[#000] text-center flex transition-transform justify-center cursor-pointer items-center font-satoshi-bold cursor pointer"
      >
        &gt;
      </div>
    </section>
  );
}

export default MovieSlider;
