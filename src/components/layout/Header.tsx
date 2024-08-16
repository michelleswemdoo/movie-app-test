import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="sticky inset-0 z-[9999] w-full bg-pink-800 shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex items-center justify-between px-6 py-2 sm:px-12 xl:w-[75rem]">
        <Link className="text-lg font-medium text-white" to="/">
          Movies app
        </Link>
        <nav>
          <ul className="items-cente flex gap-6">
            <li>
              <Link to="/" className="text-lg font-medium text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/movies" className="text-lg font-medium text-white">
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
