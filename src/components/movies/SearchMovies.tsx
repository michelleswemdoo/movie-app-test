export const SearchMovies = () => {
  return (
    <div className="w-[450px]">
      <input
        type="text"
        placeholder="Search movies..."
        className="block w-full rounded-full border bg-transparent px-6 py-2 text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0"
      />
    </div>
  );
};
