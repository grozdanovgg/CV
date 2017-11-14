import { DetectBrowserService } from './../services/detect-browser.service';
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { configTypewriter, configCV } from '../config/config-main';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit, AfterViewInit {
  ie: boolean;
  public customText: string;

  public CVCode = '';

  protected title = configCV.title;

  // tslint:disable-next-line:whitespace
  constructor(private detectBrowserService: DetectBrowserService) {
  }

  ngOnInit() {
    this.ie = this.detectBrowserService.ie();
    this.typeWriter(configTypewriter.text, configTypewriter.speed);
  }
  ngAfterViewInit(): void {
    fetch('../../assets/testClass.txt')
      .then(file => file.text())
      .then(responce => this.CVCode = responce);
  }
  private typeWriter(text, speed) {
    const textPos = 0; // initialise text position
    this.typeWriterHelper(text, textPos, speed);
  }

  private typeWriterHelper(text, textPos, speed) {
    const sContents = ' ';
    this.customText = sContents + text.substring(0, textPos) + '_';
    textPos += 1;
    if (textPos - 1 === text.length) {
      this.customText = this.customText.slice(0, textPos);
      return;
    } else {
      setTimeout(() => { this.typeWriterHelper(text, textPos, speed); }, speed);
    }
  }
}


