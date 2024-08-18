import { useRouteError, Link } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="my-10 px-6 pb-10 pt-2 text-center text-lg sm:px-12"
    >
      <h1 className="mb-4 text-3xl font-semibold">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="mb-4 text-lg">
        <i>{error instanceof Error ? error.message : 'Not Found'}</i>
      </p>

      <Link
        to="/movies"
        className="rounded-full bg-pink-700 px-6 py-3 text-sm font-medium text-white hover:bg-pink-800"
      >
        Back to all movies
      </Link>
    </div>
  );
};
