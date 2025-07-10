import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastMessageComponent } from './toast-message/toast-message.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'login';
}
