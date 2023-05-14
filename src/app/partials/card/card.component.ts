import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() pool_id!: number;
  @Input() staked!: number;
  @Input() owed!: number;
  @Input() available!: number;
  @Input() address!: string;
  @Input() rebalance!: boolean;
}
