import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http: Http) {
    // Ping server every 5 minutes to keep heroku app active
    setInterval(() => {
      this.http.get('https://wiki-marvel.herokuapp.com/');
      console.log('wiki');
    }, 300000);
  }
}
