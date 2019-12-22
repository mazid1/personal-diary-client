import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {NoteAddEditComponent} from './components/note-add-edit/note-add-edit.component';
import {CategoryManageComponent} from './components/category-manage/category-manage.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'add-note', component: NoteAddEditComponent, canActivate: [AuthGuard]},
  {path: 'edit-note/:id', component: NoteAddEditComponent, canActivate: [AuthGuard]},
  {path: 'manage-category', component: CategoryManageComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
