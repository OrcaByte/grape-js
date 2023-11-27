import axios from 'axios';

export const getImages = async (params: { type: string; page: number; q: string }) => {
  const port = localStorage.getItem('port');
  console.log('port', port);
  const response = await axios.get(`http://localhost:${port}/images`, { params });
  return response.data;
};



export const getIcons = async (q:string) => {
  const port = localStorage.getItem('port');
  console.log('port', port);
  const response = await axios.get(`http://localhost:${port}/icons`, { params: { q } });
  return response.data;
};


export const searchMovies = async (q:string) => {
  const port = localStorage.getItem('port');
  console.log('port', port);
  const response = await axios.get(`http://localhost:${port}/search-movies`, { params: { q } });
  return response.data;
};


export const scrapMovieInfo = async (params: { baseUrl:string }) => {
  const port = localStorage.getItem('port');
  console.log('port', port);
  const response = await axios.get(`http://localhost:${port}/scrap-movie`, { params });
  return response.data;
};