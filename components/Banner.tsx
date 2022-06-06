import Image from 'next/image';
import { useEffect, useState } from 'react';
import { baseUrl } from '../constants/baseUrl';
import { Movie } from '../typings';
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/solid';

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='relative w-full h-full'>
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt='main movie'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='absolute pl-5 mt-52 z-10 text-[#fff]'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl text-shadow-xl'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className='flex space-x-4 pt-8 ml-5'>
          <button className='bannerButton bg-white text-black flex flex-col items-center uppercase text-shadow-xl transform transition duration-500 hover:scale-110'>
            <PlayIcon className='h-6 w-6 text-black md:h-6 md:w-6' />
            Trailer
          </button>

          <button className='bannerButton bg-gray-500/60 flex flex-col items-center uppercase text-shadow-xl transform transition duration-500 hover:scale-110'>
            <InformationCircleIcon className='h-6 w-6 text-black md:h-6 md:w-6' />
            More info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
