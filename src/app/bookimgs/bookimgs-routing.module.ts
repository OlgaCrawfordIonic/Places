import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookimgsPage } from './bookimgs.page';

const routes: Routes = [
  {
    path: '',
    component: BookimgsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookimgsPageRoutingModule {}
