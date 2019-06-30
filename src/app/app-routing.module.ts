import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'farmaciacercana',
    pathMatch: 'full'
  },
  {
    path: 'farmaciacercana',
    loadChildren: './farmaciacercana/farmaciacercana.module#FarmaciacercanaModule'
  },
  {
    path: 'farmaciaturno',
    loadChildren: './farmaciaturno/farmaciaturno.module#FarmaciaturnoModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
