import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ApiService} from '../../services/api.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categories: Category[];
  selectedCategoryId: string;
  newTitle: string;

  constructor(private location: Location, private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
      this.selectedCategoryId = this.categories[0].id.toString();
    });
  }

  onDelete() {
    this.apiService.deleteCategory(this.selectedCategoryId).subscribe(res => {
      console.log('Deleted', this.selectedCategoryId, res);
    });
  }

  onUpdate() {
    console.log('Update', this.selectedCategoryId, this.newTitle);
    this.apiService.updateCategory({id: this.selectedCategoryId, title: this.newTitle}).subscribe(res => {
      console.log('Updated', this.selectedCategoryId, res);
    });
  }

  onBack() {
    this.location.back();
  }
}
