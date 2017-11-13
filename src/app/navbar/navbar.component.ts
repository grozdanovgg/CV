import { environment } from './../../environments/environment.prod';
import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  navbarStyle: {};
  // hintStyle: {};
  logoStyle: {};
  windowWidth: number;
  private navbarScrollStyle = {
    'background-color': 'rgb(35, 36, 31)',
    'transition': 'background-color 1s'
  };
  private navbarDefaultStyle = {
    'background-color': 'transparent',
    'transition': 'background-color 1s'
  };

  private logoScrollStyle = {
    'margin-left': '45%',
    'transition': 'margin-left 1s'
  };
  private logoDefaultStyle = {
    'margin-left': '0',
    'transition': 'margin-left 1s'
  };

  constructor() { }

  ngOnInit() {
    this.moveLogo();
  }

  private moveLogo() {
    $(window).scroll(ev => {
      const scrollTop = document.scrollingElement.scrollTop;
      if (scrollTop > 0) {
        this.navbarStyle = this.navbarScrollStyle;
        this.logoStyle = this.logoScrollStyle;
      } else {
        this.navbarStyle = this.navbarDefaultStyle;
        this.logoStyle = this.logoDefaultStyle;
      }
    });
  }
}
