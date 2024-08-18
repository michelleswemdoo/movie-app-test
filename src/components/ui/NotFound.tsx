import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="mt-4 space-y-6 text-center">
      <h1 className="mb-4 text-3xl font-semibold">
        This movie could not be found :(
      </h1>
      <Link
        to="/movies"
        className="rounded-full bg-pink-700 px-6 py-3 text-sm font-medium text-white hover:bg-pink-800"
      >
        Back to all movies
      </Link>
    </div>
  );
};
