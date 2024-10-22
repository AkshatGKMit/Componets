type Song = {
  id: '9okIrqM-';
  name: 'INTRO BELIEVER';
  type: 'song';
  year: '2022';
  releaseDate: null;
  duration: 102;
  label: 'RCR';
  explicitContent: false;
  playCount: 8976;
  language: 'hindi';
  hasLyrics: false;
  lyricsId: null;
  url: 'https://www.jiosaavn.com/song/intro-believer/SQcAeAZBeh4';
  copyright: '℗ 2022 RCR';
  album: {
    id: '40774051';
    name: 'INTRO BELIEVER';
    url: 'https://www.jiosaavn.com/album/intro-believer/,CGnMssmo5Y_';
  };
  artists: {
    primary: [
      {
        id: '1935619';
        name: 'RCR';
        role: 'primary_artists';
        image: [
          {
            quality: '50x50';
            url: 'https://c.saavncdn.com/332/Fake-Love-English-2020-20200213190221-50x50.jpg';
          },
          {
            quality: '150x150';
            url: 'https://c.saavncdn.com/332/Fake-Love-English-2020-20200213190221-150x150.jpg';
          },
          {
            quality: '500x500';
            url: 'https://c.saavncdn.com/332/Fake-Love-English-2020-20200213190221-500x500.jpg';
          },
        ];
        type: 'artist';
        url: 'https://www.jiosaavn.com/artist/rcr-songs/koX-5JVg4Hc_';
      },
    ];
    featured: [
      {
        id: '6260306';
        name: 'Sshiv';
        role: 'featured_artists';
        image: [
          {
            quality: '50x50';
            url: 'https://c.saavncdn.com/319/Khwabeeda-Punjabi-2019-20191009114232-50x50.jpg';
          },
          {
            quality: '150x150';
            url: 'https://c.saavncdn.com/319/Khwabeeda-Punjabi-2019-20191009114232-150x150.jpg';
          },
          {
            quality: '500x500';
            url: 'https://c.saavncdn.com/319/Khwabeeda-Punjabi-2019-20191009114232-500x500.jpg';
          },
        ];
        type: 'artist';
        url: 'https://www.jiosaavn.com/artist/sshiv-songs/9NtB6kWsDI4_';
      },
    ];
    all: [
      {
        id: '1935619';
        name: 'RCR';
        role: 'music';
        image: [
          {
            quality: '50x50';
            url: 'https://c.saavncdn.com/332/Fake-Love-English-2020-20200213190221-50x50.jpg';
          },
          {
            quality: '150x150';
            url: 'https://c.saavncdn.com/332/Fake-Love-English-2020-20200213190221-150x150.jpg';
          },
          {
            quality: '500x500';
            url: 'https://c.saavncdn.com/332/Fake-Love-English-2020-20200213190221-500x500.jpg';
          },
        ];
        type: 'artist';
        url: 'https://www.jiosaavn.com/artist/rcr-songs/koX-5JVg4Hc_';
      },
      {
        id: '14789623';
        name: 'RcR RcR';
        role: 'music';
        image: [];
        type: 'artist';
        url: 'https://www.jiosaavn.com/artist/rcr-rcr-songs/9max7eb8FEI_';
      },
      {
        id: '14789623';
        name: 'RcR RcR';
        role: 'lyricist';
        image: [];
        type: 'artist';
        url: 'https://www.jiosaavn.com/artist/rcr-rcr-songs/9max7eb8FEI_';
      },
    ];
  };
  image: [
    {
      quality: '50x50';
      url: 'https://c.saavncdn.com/043/INTRO-BELIEVER-Hindi-2022-20221213152331-50x50.jpg';
    },
    {
      quality: '150x150';
      url: 'https://c.saavncdn.com/043/INTRO-BELIEVER-Hindi-2022-20221213152331-150x150.jpg';
    },
    {
      quality: '500x500';
      url: 'https://c.saavncdn.com/043/INTRO-BELIEVER-Hindi-2022-20221213152331-500x500.jpg';
    },
  ];
  downloadUrl: [
    {
      quality: '12kbps';
      url: 'https://aac.saavncdn.com/043/e43b35ec9ebdd2b394e6c1d458196963_12.mp4';
    },
    {
      quality: '48kbps';
      url: 'https://aac.saavncdn.com/043/e43b35ec9ebdd2b394e6c1d458196963_48.mp4';
    },
    {
      quality: '96kbps';
      url: 'https://aac.saavncdn.com/043/e43b35ec9ebdd2b394e6c1d458196963_96.mp4';
    },
    {
      quality: '160kbps';
      url: 'https://aac.saavncdn.com/043/e43b35ec9ebdd2b394e6c1d458196963_160.mp4';
    },
    {
      quality: '320kbps';
      url: 'https://aac.saavncdn.com/043/e43b35ec9ebdd2b394e6c1d458196963_320.mp4';
    },
  ];
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
};
