import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBodyComponent } from './form-body/form-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form';
}
