import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CharacterDto } from '../../dto/character.dto';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
  private character: CharacterDto;
  constructor(
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
    if (this.route.snapshot.data.character) {
      this.character = this.route.snapshot.data.character;
    }
  }
  getImg(character: CharacterDto){
    let img = character.thumbnail.path+'.'+character.thumbnail.extension
    img = img.replace('http://','https://');
    return img;
  }
}
