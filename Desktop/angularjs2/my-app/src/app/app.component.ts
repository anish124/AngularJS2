import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  

})


export class AppComponent {
  
  users = [
    { id: 25, name: 'madhu', username: 'sanaiahgari' },
    { id: 26, name: 'sudan', username: 'aakepati' },
    { id: 27, name: 'reddy', username: 'nooka' }
  ];
  activeUser;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  
}

