import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { services } from '../../constants/services';
import { servicesInterface } from '../../interface/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('increaseDecreaseCardSize', [
      state('hovered', style({ transform: 'scale(1.2)' })),
      state('unhovered', style({ transform: 'scale(1)' })),
      transition('unhovered => hovered', animate('300ms')),
      transition('hovered => unhovered', animate('300ms'))
    ])
  ]
})
export class HomeComponent implements OnInit{
  public readonly company_tagline = 'Unleash The Radiance';
  public readonly greetings = "Welcome to TRhine Services, where your car's allure meets perfection";
  public readonly services: servicesInterface[] = services;
  public hoveredIndex: number | null = null;

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

  public cardHovered(index: number): void {
    this.hoveredIndex = index;
  }

  public cardUnhovered(): void {
      this.hoveredIndex = null;
  }
}
