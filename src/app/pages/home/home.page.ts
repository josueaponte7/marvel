import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MarvelApiService } from '../../services/marvel-api.service';

import {DataService} from '../../services/data.service';
import {CharacterDto} from '../../dto/';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public characters: CharacterDto[] = [];
  public size = '/standard_amazing';
  constructor(
    private router: Router,
    private marvelApi: MarvelApiService,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.marvelApi.getCharacters().subscribe(
      characters => {
        this.characters = characters;
      }
    );
  }

  onShowDetails(character: CharacterDto){
    this.dataService.setData(character.id, character);
    this.router.navigate(['/character-details',character.id]);
  }

  getImg(character: CharacterDto){
    let img = character.thumbnail.path+'.'+character.thumbnail.extension
    img = img.replace('http://','https://');
    return img;
  }
}
