export interface AuthToken{
  // tslint:disable-next-line:variable-name
  token: string;
}

export interface Comment {
  id: number;
  body: string;
  user: any;
  anime: number;
}

export interface Film {
  name: string;
  mark: number;
  photo: string;
  year: number;
}

export interface Anime {
  // id: number;
  // title: {
  //   english: string;
  //   romaji: string;
  //   native: string;
  // };
  // averageScore: number;
  // startDate: AnimeDate;
  // endDate: AnimeDate;
  // genres: string[];
  // description: string;
  // coverImage: {
  //   large: string;
  //   medium: string;
  // };
  // episodes: number;
  // duration: number;
  // isAdult: boolean;
  id: number;
  genres: any[];
  name: string;
  episodes: number;
  mark: number;
  photo: string;
  year: number;
  title_name: string;
  description: string;
  duration: number;
  comments: Comment[];
}

export interface Filter {
  yearFrom: number;
  yearTo: number;
  genres: string[];
  orderBy: string;
}

// Data from AniList

export const animeQuery = `
query ($id: Int)
  {
    Media(id: $id, type: ANIME) {
      id
      title {
        english
        romaji
        native
      }
      averageScore
      startDate {
        day, month, year
      }
      endDate {
        day, month, year
      }
      genres
      description
      coverImage {
        large
        medium
      }
      episodes, duration, isAdult
    }

  }
`;

export const animeNameQuery = `
query ($animeName: String)
  {
    Media(search: $animeName, type: ANIME) {
      id
      title {
        english
        romaji
        native
      }
      averageScore
      startDate {
        day, month, year
      }
      endDate {
        day, month, year
      }
      genres
      description
      coverImage {
        large
        medium
      }
      episodes, duration, isAdult
    }
  }
`;
