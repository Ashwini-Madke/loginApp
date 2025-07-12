import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }
  //latest image
  public webcamImage: WebcamImage=null;

  handleImage(webcam :WebcamImage){
    this.webcamImage=this.webcamImage;
  }

  ngOnInit(): void {
  }

}
