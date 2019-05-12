import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent implements OnInit {

  firstName: FormControl = new FormControl('');
  @Output() changeFirstNameClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  updateFirstName() {
    this.changeFirstNameClicked.emit(this.firstName.value);
  }

}
