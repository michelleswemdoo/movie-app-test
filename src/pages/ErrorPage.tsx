import { useRouteError } from 'react-router-dom';

type Error = { statusText: string; message: string };

export const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <div
      id="error-page"
      className="my-10 px-6 pb-10 pt-2 text-center text-lg sm:px-12"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error instanceof Error ? error.message : 'Something went wrong'}</i>
      </p>
    </div>
  );
};
