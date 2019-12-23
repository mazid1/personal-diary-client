import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../models/category';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-note-add-edit',
  templateUrl: './note-add-edit.component.html',
  styleUrls: ['./note-add-edit.component.css']
})
export class NoteAddEditComponent implements OnInit {

  noteId: number | string;
  categories: Category[];
  selectedCategoryId: number | string;
  title: string;
  description: string;

  constructor(private location: Location, private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.noteId = params.get('id');
    });

    this.apiService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

  onBack() {
    this.location.back();
  }

  onDelete() {

  }

  onSave() {
    if (!this.noteId) {
      this.apiService.createNote({
        title: this.title,
        description: this.description,
        category: {id: this.selectedCategoryId.toString()}
      }).subscribe(res => {
        console.log('Note added');
      });
    }
  }
}
