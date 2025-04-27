import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  stars :number[]= [1,2,3,4,5]
  @Input() rating !:number
  constructor() { }

  ngOnInit(): void {
  }

}
