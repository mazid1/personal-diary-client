import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {MainComponent} from './components/main/main.component';
import {NotesComponent} from './components/notes/notes.component';
import {NoteAddEditComponent} from './components/note-add-edit/note-add-edit.component';
import {NoteDetailsComponent} from './components/note-details/note-details.component';
import {CategoryAddComponent} from './components/category-add/category-add.component';
import {CategoryEditComponent} from './components/category-edit/category-edit.component';
import {CategoryManageComponent} from './components/category-manage/category-manage.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    NotesComponent,
    NoteAddEditComponent,
    NoteDetailsComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryManageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
