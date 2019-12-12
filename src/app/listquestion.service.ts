import { Injectable } from '@angular/core';
import { Question } from './datamodel/question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ListquestionService {
  getHero(arg0: string) {
    throw new Error("Method not implemented.");
  }
  question : Question = new Question;
  QuestionsList: any;
 
  url : string = "http://localhost:8080/myquiz-rest-api/rest/questions";

  constructor(private httpClient: HttpClient) { }


  getQuestionList(): Observable<Question[]>{
    return this.httpClient.get<Question[]>(this.url+ "/allQuestions");
  }


  save(question : Question) : Observable<Question>{
   
    return this.httpClient.post<Question>(this.url+"/addQuestion", question);
  }
   

  deleteQuestion(id : number):Observable<void>{
    return this.httpClient.delete<void>(this.url+"/delete/"+id)
  }
  }

