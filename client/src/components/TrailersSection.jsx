import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  console.log(currentTrailer.videoUrl);

  const getPlayableUrl = (url) => {
    if (url.includes("watch?v=")) {
      return url; // already valid
    }
    if (url.includes("embed/")) {
      const videoId = url.split("embed/")[1].split("?")[0];
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/watch?v=${videoId}`;
    }
    return url;
  };
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* Video Player */}
      <div className="relative mt-6 aspect-video max-w-4xl mx-auto">
        <BlurCircle top="-100px" right="-100px" />
        <ReactPlayer
          url={getPlayableUrl(currentTrailer.videoUrl)}
          controls
          playing
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto group">
        {dummyTrailers.map((trailer, index) => (
          <div
            key={index}
            className="relative cursor-pointer transition duration-300 hover:-translate-y-1 group-hover:opacity-50 hover:!opacity-100"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 md:w-12 h-8 md:h-12 transform -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
