import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {MarvelResponse} from '../models';
import {CharacterDto} from '../dto/';

import {environment} from '../../environments/environment';
const  apikey = environment.apikey;
const  hash = environment.hash;
const  ts = environment.ts;
const  url = environment.url;
const  apiVersion = environment.apiVersion;
@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterDto[]> {
    return this.http.get<MarvelResponse>(`${url}/${apiVersion}/public/characters`,{
      params:{
        ts,
        apikey,
        hash
      }
    }).pipe(
      map(resp => resp.data.results.map( character => CharacterDto.fromJson(character)))
    );
  }
}
