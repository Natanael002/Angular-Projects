import { Router, ActivatedRoute } from '@angular/router';
import { routes } from './../../../app.routes';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-product-delete',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, FormsModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})

export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: 'aaaa',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
      this.productService.readById(id).subscribe(product => {
        this.product = product
      })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}