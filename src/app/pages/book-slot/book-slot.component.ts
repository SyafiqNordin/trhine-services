import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder,UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { services } from '../../constants/services';
import { servicesInterface } from '../../interface/services';
import { BookSlot } from '../../class/bookSlot';
import { Observable, Subject, finalize, takeUntil } from 'rxjs';
import { HttpBookSlotService } from '../../http/http-book-slot.service';
import { BaseComponent } from '../../base-component';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrl: './book-slot.component.scss'
})
export class BookSlotComponent extends BaseComponent implements OnInit {
  public readonly services: servicesInterface[] = services;
  public bookSlotForm!: UntypedFormGroup;

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly bookSlotService: HttpBookSlotService,
    private readonly activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    super()
  }

  public ngOnInit(): void {
    const selectedService: string | null = this.activatedRoute.snapshot.paramMap.get('service');
    this.setBookSlotForm(selectedService);
  }

  public submitForm(): void {
    if (this.bookSlotForm.valid) {
      const slotToSave = this.getCurrentFormValues();
      this.saving = true;
      
      const request: Observable<any> = this.bookSlotService.save(slotToSave);
      request.pipe(takeUntil(this.unSubscribeOnViewDestroy), finalize(this.finalizeSaving())).subscribe({
        next: () => {
          this.snackBar.open('You have successfully booked your slot', 'Close', {
            duration: 3000, 
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });

          this.bookSlotForm.reset();
        },
        error: () => this.snackBar.open('Oh no! An error has occured', 'Close', {
          duration: 3000, 
          verticalPosition: 'top',
          panelClass: ['error-snackbar']
        })
      })
    }
  }

  private setBookSlotForm(selectedService: string | null): void {
    this.bookSlotForm = this.formBuilder.group({
      fullName: [null, Validators.required],
      email: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      service: [selectedService, Validators.required],
      date: [null, Validators.required],
      message: [null]
    })
  }

  private getCurrentFormValues(): BookSlot {
    const fullName: string = this.bookSlotForm.value.fullName;
    const email: string = this.bookSlotForm.value.email;
    const phoneNumber: string = this.bookSlotForm.value.phoneNumber;
    const service: string = this.bookSlotForm.value.service;
    const date: string = this.bookSlotForm.value.date;
    const message: string = this.bookSlotForm.value.message;

    return new BookSlot(
      fullName,
      email,
      phoneNumber,
      service,
      date,
      message
    );
  }
}
