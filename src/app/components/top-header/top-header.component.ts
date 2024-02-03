import { Component } from '@angular/core';
import { socialMediaInterface } from '../../interface/social-media';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {
  public readonly instagram: socialMediaInterface = {
    name: '@taufiqrhine',
    link: 'https://www.instagram.com/taufiqrhine/'
  };
  public readonly whatsapp: socialMediaInterface = {
    number: '+60-182331065',
    link: 'https://wa.me/60182331065'
  };
  public readonly tiktok: socialMediaInterface = {
    name: '@taufiqrhinetr',
    link: 'https://www.tiktok.com/@taufiqrhinetr'
  };
  public readonly location: socialMediaInterface = { 
    name: 'Damansara, Malaysia',
    link: 'https://maps.app.goo.gl/7AhAb3GmyCwp9uuh8'
  };
  public readonly working_hrs = 'Monday - Friday, 8.00am - 9.00pm';

  public goTo(link: string): void {
    window.open(link, '_blank');
  }
}
