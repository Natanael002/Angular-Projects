import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RedDirective } from '../../../directives/red.directive';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, RedDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
