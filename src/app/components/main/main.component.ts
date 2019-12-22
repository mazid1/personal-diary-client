import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Category} from '../../models/category';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categories: Category[];
  currentUser: any;

  constructor(private apiService: ApiService, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    this.apiService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }

}
