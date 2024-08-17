import { AxiosError } from 'axios';
import { axiosInstance } from '../config/axios';
import type { MovieApiResponse, MovieDetail } from '../types';

type GetMovieQueryParams = {
  s?: string;
  page?: number;
};
type MovieId = { i: string };

export const getMovies = async (
  params: GetMovieQueryParams,
): Promise<MovieApiResponse | undefined> => {
  try {
    const response = await axiosInstance.get<MovieApiResponse>(
      `/?&apikey=575d59d3`,
      {
        params,
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data.Error);
    }
  }
};

export const getMovie = async (
  params: MovieId,
): Promise<MovieDetail | undefined> => {
  try {
    const response = await axiosInstance.get<MovieDetail>(
      `/?&apikey=575d59d3`,
      {
        params,
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    if (error instanceof AxiosError) {
      throw new Error(error?.response?.data.Error);
    }
  }
};
