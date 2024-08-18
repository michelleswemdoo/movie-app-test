import { Movie } from '../../types';
import { MovieItem } from './MovieItem';

type MovieListProps = {
  movies: Movie[];
};
export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3">
      {/* map and render movies lists */}
      {movies?.length > 0 &&
        movies?.map((movie) => (
          <MovieItem
            key={movie.imdbID}
            imdbID={movie.imdbID}
            Poster={movie.Poster}
            Title={movie.Title}
            Type={movie.Type}
            Year={movie.Year}
          />
        ))}
    </div>
  );
};
