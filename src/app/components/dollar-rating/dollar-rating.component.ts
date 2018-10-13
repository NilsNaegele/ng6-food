import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dollar-rating',
  templateUrl: './dollar-rating.component.html',
  styleUrls: ['./dollar-rating.component.css']
})
export class DollarRatingComponent implements OnInit {
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick = new EventEmitter<number>();

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit(rating);
  }

}
