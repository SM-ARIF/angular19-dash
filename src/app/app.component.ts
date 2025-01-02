import { Component } from '@angular/core';
import { NavbarComponent } from './components/skeleton/navbar/navbar.component';
// import { HeaderComponent } from './components/skeleton/header/header.component';
import { MainComponent } from './components/skeleton/main/main.component';
// import { FooterComponent } from './components/skeleton/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    // HeaderComponent,
    MainComponent,
    // FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
