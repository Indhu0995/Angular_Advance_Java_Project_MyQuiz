import { Injectable } from '@angular/core';
import { Update } from './datamodel/Update';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './datamodel/question';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {


  getHero(arg0: string) {
    throw new Error("Method not implemented.");
  }
  update : Update = new Update;
  QuestionsList: any;
 
  url : string = "http://localhost:8080/quiz-rest-api/rest/questions";

  constructor(private httpClient: HttpClient) { }
  getQuestionList(criterion : string): Observable<Question[]>{
    var questionList : Question[];
    return this.httpClient.get(this.url+ "/search?qContent=" + criterion) as Observable<Question[]>;
  }
  save(question : Question) : Observable<Question>{
   
    return this.httpClient.post<Question>(this.url+"/update", question)
   
  }
   
  }

