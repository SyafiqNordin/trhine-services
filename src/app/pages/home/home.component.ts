import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public readonly company_tagline = 'Unleash The Radiance'
  public readonly greetings = "Welcome to TRhine Services, where your car's allure meets perfection"
}
