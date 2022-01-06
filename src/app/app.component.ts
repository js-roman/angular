import {OnInit} from '@angular/core';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  cookieEnabled: boolean | undefined;

  ngOnInit(): void {
    this.cookieEnabled = navigator.cookieEnabled;
    if (!this.cookieEnabled){
      document.cookie="testcookie";
      this.cookieEnabled=document.cookie.indexOf("testcookie")!==-1;
    }
  }

}
