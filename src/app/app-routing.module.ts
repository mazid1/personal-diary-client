import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {NoteAddEditComponent} from './components/note-add-edit/note-add-edit.component';
import {CategoryManageComponent} from './components/category-manage/category-manage.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'add-note', component: NoteAddEditComponent},
  {path: 'edit-note/:id', component: NoteAddEditComponent},
  {path: 'manage-category', component: CategoryManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
