import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { services } from '../../constants/services';
import { servicesInterface } from '../../interface/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public readonly company_tagline = 'Unleash The Radiance';
  public readonly greetings = "Welcome to TRhine Services, where your car's allure meets perfection";
  public readonly services: servicesInterface[] = services;

  public ngOnInit(): void {
    
  }
}
