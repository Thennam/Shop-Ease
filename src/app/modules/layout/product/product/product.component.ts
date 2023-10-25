import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { categoryItem, productList } from '../product/data';
import { Router } from '@angular/router';

// Product Interface
interface productList {
  id: number;
  productName: string;
  price: string;
  imageURL: string;
  category: string;
  description: string;
}

// Category Inteface
interface categoryItem {
  id: number;
  item: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  categoryList: productList[] = [...productList];
  category: categoryItem[] = [...categoryItem];
  searchText: any;
  categoryText: any;
  listShow: boolean = false;

  constructor( private router: Router,) {
    // Category selectbox default item choose
    this.categoryText = categoryItem[0].item;
  }

  //  Product filter
  fliter(event: any) {
    const searchText =
      this.searchText?.toLowerCase() || this.categoryText?.toLowerCase();
    if (searchText == 'category') {
      this.categoryList = productList;
    } else {
      this.categoryList = [...productList].filter(
        (pName) =>
          pName.productName.indexOf(searchText) > -1 ||
          pName.price.indexOf(searchText) > -1 ||
          pName.category.indexOf(searchText) > -1
      );
    }
  }

  // navigate to contact page
  goToContactPage() {
    this.router.navigate(['contact']);
  }
}
