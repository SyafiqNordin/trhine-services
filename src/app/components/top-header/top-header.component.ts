import { Component } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {
  public readonly instagram = '@trhine_ig';
  public readonly whatsapp = '+60-123456789';
  public readonly tiktok = 'trhine_tiktok';
  public readonly location = 'Damansara, Malaysia';
  public readonly working_hrs = 'Monday - Friday, 8.00am - 9.00pm'
}
