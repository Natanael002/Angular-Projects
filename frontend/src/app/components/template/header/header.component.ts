import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterModule, RouterOutlet,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private headerservice: HeaderService) {}

  ngOnInit(): void {
    
  }

  get title(): string{
    return this.headerservice.headerData.title
  }

  get icon(): string{
    return this.headerservice.headerData.icon
  }

  get routeUrl(): string{
    return this.headerservice.headerData.routeUrl
  }
}
