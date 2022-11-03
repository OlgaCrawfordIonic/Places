import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookimgsPageRoutingModule } from './bookimgs-routing.module';

import { BookimgsPage } from './bookimgs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookimgsPageRoutingModule
  ],
  declarations: [BookimgsPage]
})
export class BookimgsPageModule {}
