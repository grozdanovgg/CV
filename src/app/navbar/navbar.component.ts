import { Component, OnInit } from '@angular/core';
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
  private navbarScrollStyle = {
    'background-color': 'rgb(35, 36, 31)',
    'transition': 'background-color 1s'
  };
  private navbarDefaultStyle = {
    'background-color': 'transparent',
    'transition': 'background-color 1s'
  };

  // private hintScrollStyle = {
  //   'color': 'white',
  //   'transition': 'color 1s',
  //   'display': 'block',
  // };
  // private hintDefaultStyle = {
  //   'color': 'transparent',
  //   'transition': 'display color 1s',
  //   'display': 'none'
  // };

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

    $(window).scroll(ev => {
      const scrollTop = document.scrollingElement.scrollTop;

      if (scrollTop > 50) {
        this.navbarStyle = this.navbarScrollStyle;
        // this.hintStyle = this.hintScrollStyle;
        this.logoStyle = this.logoScrollStyle;
      } else {
        this.navbarStyle = this.navbarDefaultStyle;
        // this.hintStyle = this.hintDefaultStyle;
        this.logoStyle = this.logoDefaultStyle;

      }
      // console.log(document.scrollingElement.scrollTop);
      // console.log(this.scollTop);
    });
  }
}
