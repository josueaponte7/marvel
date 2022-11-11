import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selected = '';
  constructor(
    private translate: TranslateService,
    private storage: Storage,
    private plt: Platform
  ) { }

  setInitialAppLanguage(){
    const language = this.translate.getBrowserLang();
    this.translate.use(language);
  }
}
