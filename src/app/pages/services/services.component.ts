import { Component, OnInit } from '@angular/core';
import { services } from '../../constants/services';
import { servicesInterface } from '../../interface/services';
import { servicesCardContentMessage } from './services-card-content-message';
import { servicesCardContentMessageInterface } from './services-card-content-message-interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{
  public readonly services: servicesInterface[] = services;
  public readonly servicesCardContent: servicesCardContentMessageInterface[] = servicesCardContentMessage;

  public ngOnInit(): void {
    
  }
}
