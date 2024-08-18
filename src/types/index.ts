// Types Definition

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type?: string;
  Poster: string;
};

export type MovieApiResponse = {
  Search: Array<Movie>;
  totalResults: string;
  Response: string;
};

export type MovieDetail = {
  Title: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Plot: string;
  Language: string;
  Poster: string;
  Error?: string;
};
