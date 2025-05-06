import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { ResultRequest } from '../models/result-request';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private urlApi: string = environment.serveurUrl.categories

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ResultRequest<Category>> {
    return this.http.get<ResultRequest<Category>>(this.urlApi)
  }
}
