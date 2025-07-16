import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { SecondcartComponent } from '../secondcart/secondcart.component';
import { ThirdPagecartComponent } from '../third-pagecart/third-pagecart.component';
import { WearsComponent } from '../wears/wears.component';
import { MobilepageComponent } from '../mobilepage/mobilepage.component';
import { MobileoffersComponent } from '../mobileoffers/mobileoffers.component';
import { ToastMessageComponent } from '../toast-message/toast-message.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-page-overview',
  imports: [
    NavbarComponent,
    HomepageComponent,
    SecondcartComponent,
    ThirdPagecartComponent,
    WearsComponent,
    MobilepageComponent,
    MobileoffersComponent,
    ToastMessageComponent,
    FooterComponent,
  ],
  templateUrl: './home-page-overview.component.html',
  styleUrl: './home-page-overview.component.scss',
})
export class HomePageOverviewComponent {}
