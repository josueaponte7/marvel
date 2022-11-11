export interface MarvelResponse {
  code:   number;
  status: string;
  data:   Data;
}

export interface Data {
  offset:  number;
  limit:   number;
  total:   number;
  count:   number;
  results: Character[];
}

export interface Character {
  id:          number;
  name:        string;
  description: string;
  thumbnail:   Thumbnail;
  comics:      Available;
  series:      Available;
  stories:     Available;
}

export interface Thumbnail {
  path:      string;
  extension: string;
}

export interface Available {
  available: number;
}
