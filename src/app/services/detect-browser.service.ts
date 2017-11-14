import { Injectable } from '@angular/core';

@Injectable()
export class DetectBrowserService {

  constructor() { }
  ie() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older
      return true;
    }

    const trident = ua.indexOf('Trident/');
    // tslint:disable-next-line:max-line-length
    if (ua === 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko') {
      // IE 11
      return true;
    }

    // other browser
    return false;
  }
}

