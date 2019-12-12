import { Injectable } from '@angular/core';
import { Option } from './datamodel/Option';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OptionService {

  getHero(arg0: string) {
    throw new Error("Method not implemented.");
  }

  
   

  option : Option = new Option;
  options : number[] =[];
 
  url : string = "http://localhost:8080/myquiz-rest-api/rest/questions";

  constructor(private httpClient: HttpClient) { }
  
  save(postData) : Observable<Option>{
  
    return this.httpClient.post<Option>(this.url+"/options", postData);
  
  }
   
  }
