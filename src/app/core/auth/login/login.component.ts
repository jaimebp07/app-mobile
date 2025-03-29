import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import "portealbo-wc";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {

}
