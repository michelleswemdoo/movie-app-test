import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import { Button } from '../ui/Button';
import { AddMovie } from './AddMovie';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../../lib/data-service';
import { MovieList } from './MovieList';
import { ErrorCard } from '../ui/ErrorCard';
import { Loader } from '../ui/Loader';
import { MoviesPagination } from './MoviesPagination';

export const Movies = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('s') || '';
  const page = Number(searchParams.get('page')) || 1;

  const { isPending, data, isError, error } = useQuery({
    queryKey: ['movies', query, page],
    queryFn: () => getMovies({ s: query || 'batman', page: page }),
  });

  const handleSearch = useDebouncedCallback((searchTerm: string) => {
    setSearchParams((params) => {
      params.set('s', searchTerm);
      return params;
    });
  }, 300);

  React.useEffect(() => {
    const inputElement = document?.getElementById('s') as HTMLInputElement;
    inputElement.value = query;
  }, [query]);

  const goToPage = (pageNumber: number | string) => {
    setSearchParams((params) => {
      params.set('page', pageNumber.toString());
      return params;
    });
  };

  let content = (
    <p className="my-6 text-center text-4xl text-pink-700">Found no movies</p>
  );
  if (isPending) {
    content = <Loader />;
  }

  if (isError) {
    content = <ErrorCard message={error.message || 'Failed to fetch movies'} />;
  }

  if (data?.Search?.length! > 0) {
    content = <MovieList movies={data?.Search!} />;
  }

  return (
    <>
      <AddMovie isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="min-h-min px-6 py-10 md:px-12">
        <div className="mb-4 flex items-center justify-between">
          <div className="w-[450px]">
            <input
              id="s"
              defaultValue={query}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              type="text"
              placeholder="Search movies..."
              className="block w-full rounded-full border bg-transparent px-6 py-2 text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0"
            />
          </div>

          <Button onClick={() => setIsOpen(true)}>Add Movie</Button>
        </div>
        {content}
        <MoviesPagination page={page} goToPage={goToPage} data={data!} />
      </div>
    </>
  );
};
