import * as React from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/16/solid';
import { twJoin } from 'tailwind-merge';
import { MovieApiResponse } from '../../types';

type MoviesPaginationProps = {
  data: MovieApiResponse;
  page: number;
  goToPage: (pageNumber: number | string) => void;
};

export const MoviesPagination = ({
  data,
  page,
  goToPage,
}: MoviesPaginationProps) => {
  const limit = 10;

  const pagesCount = Math.ceil(parseInt(data?.totalResults!) / limit);

  const pages = React.useMemo(
    () => Array.from({ length: pagesCount }, (_, i) => i + 1),
    [pagesCount],
  );
  const lastItem = pages[pages.length - 1];

  return (
    <div
      aria-label="pagination"
      role="navigation"
      className="flex flex-wrap items-center justify-center gap-3 py-10 xl:px-12"
    >
      {data?.Search?.length > 0 && (
        <div className="flex flex-wrap items-center gap-1">
          <button
            aria-label="Go to previous page"
            className="group flex items-center gap-1 py-1 pr-3 transition-all duration-200 ease-out"
            disabled={page === 1 || data?.Search?.length === 0}
            onClick={() => goToPage(page - 1)}
          >
            <ChevronLeftIcon
              focusable="false"
              className="size-6 text-slate-950 group-hover:text-slate-400 group-disabled:text-slate-400"
            />
            <span className="hidden text-sm font-semibold text-slate-950 underline group-hover:text-slate-400 group-disabled:text-slate-400 sm:block">
              Previous
            </span>
          </button>
          {pages.length > 0 &&
            pages.length > 5 &&
            pages.slice(0, 5).map((pageItem) => (
              <button
                disabled={page === pageItem}
                aria-current={page === pageItem ? 'true' : 'false'}
                aria-label={`Current page page ${pageItem}`}
                className={twJoin(
                  'rounded border border-slate-950 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 ease-out hover:bg-black/10',
                  page === pageItem &&
                    'bg-slate-950 text-white hover:bg-slate-800',
                )}
                key={pageItem}
                onClick={() => goToPage(pageItem)}
              >
                {pageItem}
              </button>
            ))}

          {pages.length > 0 &&
            pages.length <= 5 &&
            pages.map((pageItem) => (
              <button
                disabled={page === pageItem}
                aria-current={page === pageItem ? 'true' : 'false'}
                aria-label={`Current page page ${pageItem}`}
                className={twJoin(
                  'rounded border border-slate-950 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 ease-out hover:bg-black/10',
                  page === pageItem &&
                    'bg-slate-950 text-white hover:bg-slate-800',
                )}
                key={pageItem}
                onClick={() => goToPage(pageItem)}
              >
                {pageItem}
              </button>
            ))}

          {pages.length > 0 && pages.length > 5 && (
            <div className="px-2 py-1">
              <EllipsisHorizontalIcon className="size-6 text-slate-950" />
            </div>
          )}

          {pages.length > 0 && pages.length > 5 && (
            <button
              disabled={page === lastItem}
              aria-current={page === lastItem ? 'true' : 'false'}
              aria-label={`Current page page ${lastItem}`}
              className={twJoin(
                'rounded border border-slate-950 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 ease-out hover:bg-black/10',
                page === lastItem &&
                  'bg-slate-950 text-white hover:bg-slate-800',
              )}
              onClick={() => goToPage(lastItem)}
            >
              {lastItem}
            </button>
          )}
          <button
            aria-label="Go to next page"
            disabled={page === lastItem}
            className="group flex items-center gap-1 py-1 pl-3 transition-all duration-200 ease-out"
            onClick={() => goToPage(page + 1)}
          >
            <span className="hidden text-sm font-semibold text-slate-950 underline group-hover:text-slate-400 group-disabled:text-slate-400 sm:block">
              Next
            </span>
            <ChevronRightIcon
              focusable="false"
              className="size-6 text-slate-950 group-hover:text-slate-400 group-disabled:text-slate-400"
            />
          </button>
        </div>
      )}
    </div>
  );
};
