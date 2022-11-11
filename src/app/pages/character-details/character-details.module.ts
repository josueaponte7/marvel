import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule} from '@ngx-translate/core';

import { CharacterDetailsPageRoutingModule } from './character-details-routing.module';
import { CharacterDetailsPage } from './character-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailsPageRoutingModule,
    TranslateModule,
  ],
  declarations: [CharacterDetailsPage]
})
export class CharacterDetailsPageModule {}
