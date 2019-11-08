import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {


  @Input() product: Product;
  @Output() productCliked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. ng on changes');
  //   console.log(changes);
  // }

  ngOnInit() {
    console.log('3. ng on init');
  }

  ngDoCheck() {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {

    console.log('5. ngDestroy');

  }

  addCart() {
    console.log('Añadir al carrito');
    this.productCliked.emit(this.product.id);
  }

}
