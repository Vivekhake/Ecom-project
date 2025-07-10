import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SecondcartComponent } from './secondcart/secondcart.component';
import { ThirdPagecartComponent } from './third-pagecart/third-pagecart.component';
import { WearsComponent } from './wears/wears.component';
import { MobilepageComponent } from './mobilepage/mobilepage.component';
import { MobileoffersComponent } from './mobileoffers/mobileoffers.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToastMessageComponent,
    NavbarComponent,
    HomepageComponent,
    SecondcartComponent,
    ThirdPagecartComponent,
    WearsComponent,
    MobilepageComponent,
    MobileoffersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'login';
}
