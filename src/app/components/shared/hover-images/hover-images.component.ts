import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-images',
  templateUrl: './hover-images.component.html',
  styleUrls: ['./hover-images.component.css']
})
export class HoverImagesComponent implements OnInit {

  @Input() img = "";
  @Input() porc = "10%";

  constructor() { }

  ngOnInit(): void {
  }

}
