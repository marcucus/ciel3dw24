import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Meteo } from '../models/meteo.model';

const baseUrl = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Meteo[]>(baseUrl);
  }

}
