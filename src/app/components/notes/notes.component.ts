import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Note} from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input()
  categoryId: any;
  notes: Note[];

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit() {
    // console.log('CategoryId', this.categoryId);
    this.apiService.getNotesByCategory(this.categoryId).subscribe(res => {
      this.notes = res;
    });
  }

  clicked(id: string) {
    this.router.navigateByUrl(`/edit-note/${id}`);
  }
}
