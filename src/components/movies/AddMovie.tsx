import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { defaultValues, movieSchema } from '../../lib/movie-schema';
import Modal from '../ui/Modal';

// infere MovieObj using zod
export type MovieObj = z.infer<typeof movieSchema>;

type AddMovieProps = {
  isOpen: boolean;
  onClose: () => void;
  addMovie: (data: MovieObj) => void;
};

export const AddMovie = ({ isOpen, onClose, addMovie }: AddMovieProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MovieObj>({ defaultValues, resolver: zodResolver(movieSchema) });

  // handle form submission
  const onSubmit = async (data: MovieObj) => {
    addMovie(data);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="mb-6 text-center text-xl font-semibold text-pink-700">
        Add Movie
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            aria-invalid={errors.title ? 'true' : 'false'}
            {...register('title')}
            required
            type="text"
            placeholder="Title"
            className={`${errors.title ? 'border-[#DF4B2D] text-[#DF4B2D] focus:invalid:border-[#DF4B2D]' : ''} block w-full rounded border bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0`}
          />
          {errors?.title && (
            <span className="flex items-center gap-1 text-left text-sm text-[#DF4B2D]">
              {errors.title.message as string}
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            aria-invalid={errors.year ? 'true' : 'false'}
            {...register('year')}
            required
            type="text"
            placeholder="Release year"
            className={`${errors.year ? 'border-[#DF4B2D] text-[#DF4B2D] focus:invalid:border-[#DF4B2D]' : ''} block w-full rounded border bg-transparent px-5 py-[14px] text-base font-medium text-slate-950 transition-all duration-200 ease-linear placeholder:text-slate-950/25 focus:border-purple-950 focus:text-slate-950 focus:outline-0`}
          />
          {errors?.year && <span>{errors.year.message as string}</span>}
        </div>
        <div className="mb-12">
          <button
            className="w-full rounded-sm bg-pink-700 px-5 py-[14px] text-white disabled:bg-slate-400"
            type="submit"
          >
            Add Movie
          </button>
        </div>
      </form>
    </Modal>
  );
};
