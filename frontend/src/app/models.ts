export interface AnimeDate {
  day: number ;
  month: number;
  year: number;
}

export interface Anime {
  id: number;
  title: {
    english: string;
    romaji: string;
    native: string;
  };
  averageScore: number;
  startDate: AnimeDate;
  endDate: AnimeDate;
  genres: string[];
  description: string;
  coverImage: {
    large: string;
    medium: string;
  };
  episodes: number;
  duration: number;
  isAdult: boolean;
}

// Data from AniList
export interface AnimeData {
  data: {
    Media: Anime;
  };
}

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
