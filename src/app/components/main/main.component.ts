import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categories: Category[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }

}
