import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../../lib/data-service';
import { BackButton } from './BackButton';
import { ErrorCard } from '../ui/ErrorCard';
import { Loader } from '../ui/Loader';

export const MovieDetail = () => {
  const { movieId } = useParams();

  const { isPending, isError, error, data } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie({ i: movieId as string }),
  });

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorCard message={error.message || 'Failed to fetch movies'} />;
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <BackButton />
        <h1 className="text-sm font-medium text-slate-950 sm:text-xl">
          {data?.Title}
        </h1>
      </div>
      <div className="mt-8 w-full text-slate-950 sm:w-4/5">
        <div className="relative h-[420px] overflow-hidden rounded-lg">
          <img
            src={data?.Poster}
            alt={data?.Title}
            sizes="100%"
            className="block size-full rounded-lg object-cover"
          />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <ul className="flex flex-wrap items-center gap-3">
            <li className="flex items-center gap-1">
              Language:
              <span className="font-semibold">{data?.Language}</span>
            </li>

            <li className="flex items-center gap-[2px]">
              Released:
              <span className="font-semibold">{data?.Released}</span>
            </li>

            <li className="flex items-center gap-[2px]">
              Rated:
              <span className="font-semibold">{data?.Rated}</span>
            </li>
            <li className="flex items-center gap-[2px]">
              Runtime:
              <span className="font-semibold">{data?.Runtime}</span>
            </li>
          </ul>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">Description</span>
            <p className="text-sm">{data?.Plot}</p>
          </div>
        </div>
      </div>
    </>
  );
};
