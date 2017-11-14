import { Injectable } from '@angular/core';

@Injectable()
export class DetectBrowserService {
  private ua = window.navigator.userAgent;
  private iOSdetected = !!this.ua.match(/iPad/i) || !!this.ua.match(/iPhone/i);

  constructor() { }
  ie() {
    const msie = this.ua.indexOf('MSIE');
    if (msie > 0) {
      // IE 10 or older
      return true;
    }
    // tslint:disable-next-line:max-line-length
    if (this.ua.match(/Trident\/7\./)) {
      // IE 11
      return true;
    }

    // other browser
    return false;
  }

  safari() {
    const isSafari = /^((?!chrome|android).)*safari/i.test(this.ua);
    return isSafari;
  }

  iOS() {
    if (this.iOSdetected) {
      return true;
    }
    return false;
  }
}

