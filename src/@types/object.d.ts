type Image = {
  quality: string;
  url: string;
};

type Images = Image[];

type Song = {
  id: string;
  name?: string;
  title?: string;
  image: Images;
};
type Songs = Song[];

type Artist = {
  id: string;
  title: string;
  image: Images;
};
type Artists = Artist[];

type Album = {
  id: string;
  title: string;
  image: Images;
};
type Albums = Album[];

type Playlist = {
  id: string;
  title: string;
  image: Images;
};
type Playlists = Playlist[];

type GlobalSearch = {
  success: boolean;
  data: {
    songs: {
      results: Songs;
    };
    albums: {
      results: Albums;
    };
    artists: {
      results: Artists;
    };
    playlists: {
      results: Playlists;
    };
  };
};

type GlobalSearchParams = {
  query: string;
};

type SearchSong = {
  success: boolean;
  data: {
    total: number;
    start: number;
    results: Song[];
  };
};

type SearchSongParams = {
  page: number;
  query: string;
};
