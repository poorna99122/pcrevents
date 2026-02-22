import { Component, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, HeroComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = signal(false);
  submitSuccess = signal(false);

  eventTypes = [
    'Wedding',
    'Engagement',
    'Birthday Party',
    'Corporate Event',
    'Decoration Only',
    'Other',
  ];

  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name:      ['', [Validators.required, Validators.minLength(2)]],
      phone:     ['', [Validators.required, Validators.pattern(/^[+]?[\d\s()-]{8,15}$/)]],
      email:     ['', [Validators.required, Validators.email]],
      eventType: ['', Validators.required],
      eventDate: ['', Validators.required],
      message:   ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
  this.submitted.set(true);
  if (this.contactForm.invalid) return;

  const params = new URLSearchParams();
  params.append('form-name', 'contact');

  const v = this.contactForm.value;

  params.append('name', v.name!);
  params.append('phone', v.phone!);
  params.append('email', v.email!);
  params.append('eventType', v.eventType!);
  params.append('eventDate', v.eventDate!);
  params.append('message', v.message!);

  // Netlify Forms submission
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  })
  .then(() => {

    // ✅ ADD THIS BLOCK FOR WHATSAPP NOTIFICATION
    fetch('/.netlify/functions/whatsapp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: v.name,
        phone: v.phone,
        email: v.email,
        eventType: v.eventType,
        eventDate: v.eventDate,
        message: v.message
      })
    });

    this.submitSuccess.set(true);
    this.contactForm.reset();
    this.submitted.set(false);

  })
  .catch((error) => {
    console.error('Submission failed', error);
    this.submitSuccess.set(true);
  });
}
}
