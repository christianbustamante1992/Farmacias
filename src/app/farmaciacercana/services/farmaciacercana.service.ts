import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class FarmaciacercanaService {

  constructor(private http: HTTP) { }

  getfarmacias(){
    this.http.get('https://farmaciariobamba.000webhostapp.com/WSREST/Farmacia/GetAllTurno/-1.664823/-78.647734/1', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  }
}
