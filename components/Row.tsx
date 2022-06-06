import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import { Movie } from '../typings';
import Thumbnail from './Thumbnail';

interface Props {
  title: string;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className=' '>
      <h2 className='w-56 my-2 cursor-pointer text-lg font-semibold text-[#e6e6e6] transition duration-200 hover:text-white'>
        {title}
      </h2>
      <div className='group relative'>
        <ChevronLeftIcon
          className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
          onClick={() => handleClick('left')}
        />
        <div
          ref={rowRef}
          className='flex items-center space-x-1 overflow-hidden md:space-x-2 '
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}

export default Row;
