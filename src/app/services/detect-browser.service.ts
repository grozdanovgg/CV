import { Injectable } from '@angular/core';

@Injectable()
export class DetectBrowserService {
  private ua = window.navigator.userAgent;
  private iOSdetected = !!this.ua.match(/iPad/i) || !!this.ua.match(/iPhone/i);

  constructor() { }
  ie() {
    const msie = this.ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older
      return true;
    }

    const trident = this.ua.indexOf('Trident/');
    // tslint:disable-next-line:max-line-length
    if (this.ua === 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko') {
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

