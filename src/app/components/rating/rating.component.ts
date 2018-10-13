import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() type = 'star';

  Dollars = [1, 2, 3, 4, 5 ];
  TotalLeftDollars: Array<number>;
  Stars = [1, 2, 3, 4, 5 ];
  TotalLeftStars: Array<number>;

  ngOnInit() {
    this.Dollars = [1, 2, 3, 4, 5 ];
    if (this.type === 'currency') {
        this.TotalLeftDollars = this.Dollars.splice(this.rating);
    } else {
      this.TotalLeftStars = this.Stars.splice(this.rating);
    }
  }

}
