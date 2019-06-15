import { Component } from '@angular/core';
import { MapaPage } from '../mapa/mapa';
import { FarmaciaPage } from '../farmacia/farmacia';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapaPage;
  tab2Root = FarmaciaPage;

  constructor() {

  }
}
