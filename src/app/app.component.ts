import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    asideToggle = false;
    toggleAside(){
        this.asideToggle = !this.asideToggle;
    }

}
