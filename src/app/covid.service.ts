import { Component, OnInit } from '@angular/core';
import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService implements OnInit{
  apiUrl = 'https://www.worldometers.info/coronavirus/';

  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.getAll()
    this.getCountries()
   }
  getAll() {
    return this.http.get(`${this.apiUrl}`, );
  }

  getCountries() {
    return this.http.get(`${this.apiUrl}countries`);
  }

}
