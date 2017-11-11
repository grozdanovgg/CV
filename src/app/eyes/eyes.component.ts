import { Component, OnInit } from '@angular/core';
import { DrowEyeService } from '../services/drow-eye.service';
import { eyes } from '../config/config-main';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.css']
})
export class EyesComponent implements OnInit {

  constructor(private eye: DrowEyeService) { }

  ngOnInit() {
    this.eye.draw('eye-left', 'pupil-left', 24, 16, 18, 'white');
    this.eye.draw('eye-right', 'pupil-right', 78, -2, 18, 'white');
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusiv
  }
}
