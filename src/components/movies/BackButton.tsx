import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  // navigate backward
  const navigate = useNavigate();
  return (
    <button
      aria-label="back to search result"
      data-testid="back button"
      type="button"
      className="flex cursor-pointer items-center gap-1 text-slate-950 underline"
      onClick={() => navigate(-1)}
    >
      <ChevronLeftIcon
        className="size-6 text-slate-950"
        aria-hidden="true"
        focusable="false"
        data-testid="Chevron-Left-Icon"
      />
      <span>Back</span>
    </button>
  );
};
