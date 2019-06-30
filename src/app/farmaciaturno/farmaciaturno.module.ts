import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FarmaciaturnoComponent } from './farmaciaturno/farmaciaturno.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: '', component: FarmaciaturnoComponent }
];

@NgModule({
  declarations: [FarmaciaturnoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    IonicModule
  ]
})
export class FarmaciaturnoModule { }
