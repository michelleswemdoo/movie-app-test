import { Link } from 'react-router-dom';
import { Movie } from '../../types';
export const MovieItem = ({ imdbID, Title, Poster, Year }: Movie) => {
  return (
    <div className="cursor-pointer rounded-lg bg-white text-slate-950 shadow-md">
      <Link
        tabIndex={0}
        className="block h-full"
        aria-label={`Details for ${Title}
        `}
        to={`/${encodeURIComponent(imdbID)}`}
      >
        <div className="relative h-[200px] w-full">
          <img
            src={Poster}
            alt={Title}
            className="block size-full rounded-t-lg object-cover"
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
