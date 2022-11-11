import {Character, Thumbnail} from '../models/marvel.response';

export class CharacterDto{
  constructor(
    public id:          number,
    public name:        string,
    public description: string,
    public thumbnail:   Thumbnail,
    public comics:      number,
    public series:      number,
    public stories:     number,
  ){

  }

  static fromJson(character: Character){
      return new CharacterDto(
        character.id,
        character.name,
        character.description,
        character.thumbnail,
        character.comics.available,
        character.series.available,
        character.stories.available,
      );
  }

  get img(){
    return `${this.thumbnail.path}.${this.thumbnail.extension}`;
  }

}
