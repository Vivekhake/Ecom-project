import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { Comment } from "@angular/compiler";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  imports: [CommonModule],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userName = "";

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Fetch first name directly from DB-backed user session/token
    this.userService.getFirstName().subscribe({
      next: (firstName) => {
        this.userName = firstName;
        this.isLoggedIn = true;
      },
      error: (err) => {
        this.isLoggedIn = false;
        console.warn("User not logged in or session expired");
      },
    });
  }

  logout() {
    // Call logout API (if needed), then:
    this.isLoggedIn = false;
    window.location.reload();
  }
}
