import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrl: './book-slot.component.scss'
})
export class BookSlotComponent {
  public bookSlotForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  });
}
