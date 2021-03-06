import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gerant',
  templateUrl: './gerant.component.html',
  styleUrls: ['./gerant.component.scss']
})
export class GerantComponent implements OnInit {
  addressForm = new FormGroup({
    large: new FormControl(false),
    quantity: new FormControl(10),
    name: new FormControl(null, Validators.required),
    street: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    postalCode: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
    shipping: new FormControl('free', Validators.required),
    tracking: new FormControl(true),
    arrival: new FormControl(new Date())
  });

  states = [
    {
      'name': 'Alabama',
      'abbreviation': 'AL'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
