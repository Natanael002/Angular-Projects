import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import { HomeComponent } from '../../../views/home/home.component';
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [MatListModule, MatSidenavModule, 
            HomeComponent, ProductCrudComponent, 
            RouterModule, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
