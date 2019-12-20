import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-note-add-edit',
  templateUrl: './note-add-edit.component.html',
  styleUrls: ['./note-add-edit.component.css']
})
export class NoteAddEditComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  onCancel() {
    this.location.back();
  }
}
