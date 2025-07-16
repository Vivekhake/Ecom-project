import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { routes } from "../../app.routes";
import { SellerHomeComponent } from "../seller-home/seller-home.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ProductpageComponent } from "../../productpage/productpage.component";
import { OrderdetailsComponent } from "../orderdetails/orderdetails.component";

@Component({
  imports: [
    CommonModule,
    RouterModule,
    SellerHomeComponent,
    DashboardComponent,
    ProductpageComponent,
    OrderdetailsComponent,
  ], // Add necessary imports if needed
  selector: "app-seller-dashboard",
  templateUrl: "./sellerdashboard.component.html",
  styleUrls: ["./sellerdashboard.component.scss"],
})
export class SellerDashboardComponent {
  public pageId: string = "1";

  public setPageId(pageId: string): void {
    this.pageId = pageId;
    console.log(`Page ID set to: ${this.pageId}`);
  }

  showPopup = true; // show on page load

  constructor(private router: Router) {
    const user = localStorage.getItem("userToken");
    this.isLoggedIn = !!user; // true if logged in
  }

  closePopup() {
    this.showPopup = false;
  }

  goToLogin() {
    this.router.navigate(["/seller-login"]);
  }

  goToSignup() {
    this.router.navigate(["/seller-register"]);
  }
  isLoggedIn = false;

  logout() {
    localStorage.removeItem("userToken");
    this.isLoggedIn = false;
    // Optionally redirect
  }
}
