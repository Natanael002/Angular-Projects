import { HeaderService } from './../../components/template/header/header.service';
import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProductRead2Component } from '../../components/product/product-read2/product-read2.component';

@Component({
  selector: 'app-product-crud',
  imports: [RouterModule, RouterOutlet, ProductReadComponent,
    ProductRead2Component],
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}