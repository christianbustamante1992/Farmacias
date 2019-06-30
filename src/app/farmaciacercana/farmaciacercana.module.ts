import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FarmaciacercanaComponent } from './farmaciacercana/farmaciacercana.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

const routes: Routes = [
  { path: '', component: FarmaciacercanaComponent }
];

@NgModule({
  declarations: [FarmaciacercanaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    IonicModule
  ],
  providers : [
    HTTP
  ]
})
export class FarmaciacercanaModule { }
