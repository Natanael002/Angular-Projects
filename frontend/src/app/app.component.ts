import { Component , LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common'
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatCardModule} from '@angular/material/card'
import { RedDirective } from './directives/red.directive'
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatTableModule, MatTable } from '@angular/material/table';


registerLocaleData(localePt)

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, 
            FooterComponent, NavComponent, 
            MatCardModule, RedDirective, MatButtonModule,
            MatSnackBarModule, FormsModule, MatFormFieldModule,
          MatInputModule, MatTableModule, MatTable],
  templateUrl:'app.component.html'
  
})
export class AppComponent {
  nome = 'Maria';
}
