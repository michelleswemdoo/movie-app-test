import { MovieDetail } from '../components/movies/MovieDetail';
import { BackButton } from '../components/movies/BackButton';

export const MovieDetailPage = () => {
  return (
    <div className="px-6 pb-10 pt-2 sm:px-12">
      <div className="py-2">
        <BackButton />
      </div>
      <MovieDetail />
    </div>
  );
};
