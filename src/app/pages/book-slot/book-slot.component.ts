import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { services } from '../../constants/services';
import { servicesInterface } from '../../interface/services';


@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrl: './book-slot.component.scss'
})
export class BookSlotComponent {
  public readonly services: servicesInterface[] = services;
  public bookSlotForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    service: new FormControl([])
  });
}
