import axios from 'axios';
import { Movie } from './types';

const API_URL = 'https://api.themoviedb.org/3/search/movie';

// TODO: should we paginate here?
// Might only get the first page of results...
const search = async (query:string) => {
  const queryUrl = `${API_URL}?include_adult=false&language=en-US&page=1&query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
  const results = await axios.get(queryUrl);

  return results.data.results as Movie[];
};

export default { search };
