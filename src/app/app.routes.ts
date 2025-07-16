import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductpageComponent } from './productpage/productpage.component';
import path from 'path';
import { SellerDashboardComponent } from './seller/sellerdashboard/sellerdashboard.component';
import { DashboardComponent } from './seller/dashboard/dashboard.component';
import { OrderdetailsComponent } from './seller/orderdetails/orderdetails.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { HomePageOverviewComponent } from './home-page-overview/home-page-overview.component';
import { FooterComponent } from './footer/footer.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'homepage', component: HomePageOverviewComponent },
  { path: 'sellerdashboard', component: SellerDashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orderdetails', component: OrderdetailsComponent },
  { path: 'seller-home', component: SellerHomeComponent },
  { path: 'seller-register', component: SellerRegisterComponent },
  { path: 'seller-login', component: SellerLoginComponent },

  { path: '**', redirectTo: '/homepage' },
];
