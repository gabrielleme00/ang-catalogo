import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  create(company: any) {
    return this.http.post(`${environment.apiUrl}/company/create`, company);
  }

  getAll() {
    return this.http.get(`${environment.apiUrl}/company/get`);
  }

  getById(id: String) {
    return this.http.get(`${environment.apiUrl}/company/get/${id}`);
  }

  update(company: any) {
    const id = company._id;
    return this.http.put(`${environment.apiUrl}/company/update/${id}`, company);
  }

  delete(id: String) {
    return this.http.delete(`${environment.apiUrl}/company/update/${id}`);
  }
}
