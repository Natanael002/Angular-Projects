import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card'

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Inicio",
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
    
  }
}
