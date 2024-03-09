import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { services } from '../../constants/services';
import { servicesInterface } from '../../interface/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public readonly company_tagline = 'Unleash The Radiance';
  public readonly greetings = "Welcome to TRhine Services, where your car's allure meets perfection";
  public readonly services: servicesInterface[] = services;

  constructor(
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    
  }

  public navigateToServicePage(): void {
    this.router.navigateByUrl('/services');
  }

  public navigateToBookSlotPage(): void {
    this.router.navigateByUrl('/book-slot');
  }
}
