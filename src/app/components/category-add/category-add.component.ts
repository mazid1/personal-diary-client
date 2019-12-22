import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  addCategoryForm = new FormGroup({
    title: new FormControl('')
  });

  constructor(private location: Location, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.apiService.createCategory(this.addCategoryForm.value).subscribe(res => {
      console.log('response', res);
    });
  }

  onBack() {
    this.location.back();
  }
}
