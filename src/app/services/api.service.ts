import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/category';
import {Observable} from 'rxjs';
import {Note} from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.apiUrl}/categories`);
  }

  public createCategory(obj: { title: string }): Observable<Category> {
    return this.httpClient.post<Category>(`${this.apiUrl}/category`, obj);
  }

  public deleteCategory(id: string) {
    return this.httpClient.delete(`${this.apiUrl}/category/${id}`);
  }

  public updateCategory(obj: { id: string, title: string }) {
    return this.httpClient.put(`${this.apiUrl}/category/${obj.id}`, obj);
  }

  public getNotesByCategory(id: string | number): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.apiUrl}/notes/category/${id}`);
  }

  public getNoteById(id: string | number): Observable<Note> {
    return this.httpClient.get<Note>(`${this.apiUrl}/note/${id}`);
  }

  public createNote(obj: { title: string, description: string, category: { id: string } }) {
    return this.httpClient.post(`${this.apiUrl}/note`, obj);
  }

  public deleteNote(id: string | number) {
    return this.httpClient.delete(`${this.apiUrl}/note/${id}`);
  }

  public updateNote(obj: { title?: string, description?: string, category?: Category }, id) {
    return this.httpClient.put(`${this.apiUrl}/note/${id}`, obj);
  }
}
