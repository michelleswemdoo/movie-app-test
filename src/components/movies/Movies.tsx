import * as React from 'react';
import { Button } from '../ui/Button';
import { AddMovie } from './AddMovie';
import { SearchMovies } from './SearchMovies';
import { MovieList } from './movieList';

export const Movies = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <AddMovie isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="min-h-min px-6 py-10 md:px-12">
        <div className="mb-4 flex items-center justify-between">
          <SearchMovies />
          <Button onClick={() => setIsOpen(true)}>Add Movie</Button>
        </div>

        <MovieList />
      </div>
    </>
  );
};

//  <>
//    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3">
//      {listings?.results.map((list) => (
//        <PropertyListingsCard list={list} key={list.listing_id} />
//      ))}
//    </div>
//    <ListingsPagination limit={limit} listings={listings!} />
//  </>;
