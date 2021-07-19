import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.scss'],
})
export class TestAppComponent implements OnInit {
  title = 'Hello Olga';
  img = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg';
  alt = 'sunset';
  activeClass = false;
  colorBlue = 'blue';
  condColor = true;
  public fname = '';
  public lname = '';
  public show = false;
  //public color = 'red'
  public colors = ['red', 'green', 'blue'];
  public b = true;
  public c = true;
  public size = '30px';
  public border = '1px solid black';
 
  constructor() {}

  ngOnInit(): void {}
  onClick(value: any) {
    console.log(value);
  }

  onMouseMove(event: any) {
    console.log(event);
  }

  toggle() {
    this.b = !this.b;
    this.c = !this.c;
  }
}
