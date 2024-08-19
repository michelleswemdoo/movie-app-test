import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import { Img } from 'react-image';

// Movie item definition
export const MovieItem = ({ imdbID, Title, Poster, Year }: Movie) => {
  return (
    <div className="cursor-pointer rounded-lg bg-white text-slate-950 shadow-md">
      <Link
        tabIndex={0}
        className="block h-full"
        aria-label={`Details for ${Title}
        `}
        to={`/movies/${encodeURIComponent(imdbID)}`}
      >
        <div className="relative h-[200px] w-full">
          <Img
            src={Poster}
            alt={Title}
            className="block size-full rounded-t-lg object-cover"
            loader={<div className="spinner-mini"></div>}
            unloader={
              <div className="flex h-[200px] w-[300px] items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
                <svg
                  className="size-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            }
          />
        </div>
        <div className="flex flex-col gap-[2px] p-3 text-sm font-semibold">
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap">
            {Title}
          </h3>
          <div>{Year}</div>
        </div>
      </Link>
    </div>
  );
};
