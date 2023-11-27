import { easyStateManager } from 'rxdux-state-manager';
import { ISearchMovie } from '../../types/canvas';
import { scrapMovieInfo, searchMovies } from '../../utils/apis';
import { setFirstTemplate } from './setFirstTemplate';
import { setSecondPageTemplate } from './setSecondPageTemplate';
import { getThirdTemplate } from './setThirdPageTemplate';
import { setFourthTemplate } from './setFourthPageTemplate';

class ListClass {
  list: any[] = [];
  index: number = 0;
  constructor(list: any[]) {
    this.list = list;
  }

  getListItem() {
    if (this.index === this.list.length) {
      this.index = 0;
    }
    return this.list[this.index++];
  }
}

interface IMovieDialogState {
  isOpen: boolean;
  movies: ISearchMovie[];
  selectedMovie: number | undefined;
  isLoading: boolean;
  isSearching: boolean;
  movieInfo?: {
    facts: string[];
    casts: {
      img: string;
      name: string;
      character: string;
    }[];
  };
}

export const {
  $state: $MovieDialogState,
  updateState: updateMovieDialogState,
  useStateManager: useMovieDialogStateManager,
} = easyStateManager<IMovieDialogState>({
  isOpen: false,
  movies: [],
  selectedMovie: undefined,
  isLoading: false,
  isSearching: false,
});

class MovieDialogStateManager {
  openDialog() {
    updateMovieDialogState((draft) => {
      draft.isOpen = true;
    });
  }

  toggleLoading(isLoading: boolean) {
    updateMovieDialogState((draft) => {
      draft.isLoading = isLoading;
    });
  }

  closeDialog() {
    updateMovieDialogState((draft) => {
      draft.selectedMovie = undefined;
      draft.movies = [];
      draft.isOpen = false;
    });
  }

  async searchMovies(searchTxt: string) {
    try {
      this.toggleLoading(true);
      const data = await searchMovies(searchTxt);
      console.log(data);
      updateMovieDialogState((draft) => {
        draft.movies = data.results;
        draft.isLoading = false;
      });
    } catch (error) {
      console.log(error);
      this.toggleLoading(false);
    }
  }
  setSelectedMovie(index: number) {
    updateMovieDialogState((draft) => {
      draft.selectedMovie = index;
    });
  }

  async searchSelectedMovieInfo(callBack?: () => void) {
    try {
      updateMovieDialogState((draft) => {
        draft.isSearching = true;
      });
      const state = $MovieDialogState.value;
      const selectedMovie: ISearchMovie = state.movies[state.selectedMovie!];
      const movieInfo = await scrapMovieInfo({ baseUrl: selectedMovie.page });
      const backdrops = new ListClass(movieInfo.result?.backdrops);
      const logos = new ListClass(movieInfo.result?.logos);
      // const casts = new ListClass(movieInfo.result?.casts);
      const posters = new ListClass(movieInfo.result?.posters);
      console.log(movieInfo);
      updateMovieDialogState((draft) => {
        draft.movieInfo = movieInfo;
        draft.isSearching = false;
        draft.isOpen = false;
      });
      callBack?.();
      setFirstTemplate(logos.getListItem()?.url, backdrops.getListItem()?.url);
      const year = selectedMovie.date.split(', ')[1];
      const movieTitle = `${selectedMovie.title} (${year})`;
      setSecondPageTemplate(
        backdrops.getListItem()?.url,
        posters.getListItem()?.url,
        movieTitle,
        selectedMovie.desc,
        movieInfo.result?.facts,
      );
      getThirdTemplate(backdrops.getListItem()?.url);
      setFourthTemplate(backdrops.getListItem()?.url, movieInfo.result?.casts);
    } catch (error) {
      console.log(error);
      updateMovieDialogState((draft) => {
        draft.isSearching = false;
      });
    }
  }
}
export const movieDialogStateManager = new MovieDialogStateManager();
