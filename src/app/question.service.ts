import { Injectable } from '@angular/core';
import { Question } from './datamodel/question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Option } from './datamodel/Option'


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  allQuestion() {
    throw new Error("Method not implemented.");
  }
  getquestionList() {
    throw new Error("Method not implemented.");
  }
  getoptions(id: any) {
    throw new Error("Method not implemented.");
  }
  getHero(arg0: string) {
    throw new Error("Method not implemented.");
  }
  question : Question = new Question;
  QuestionsList: any;
  options : Option[]=[];
 
  url : string = "http://localhost:8080/myquiz-rest-api/rest/questions";

  constructor(private httpClient: HttpClient) { }
  getQuestionList(criterion : string): Observable<Question[]>{
    var questionList : Question[];
    return this.httpClient.get(this.url+ "/search?qContent=" + criterion) as Observable<Question[]>;
  }

  
  save(question : Question) : Observable<Question>{
   
    return this.httpClient.post<Question>(this.url+"/addQuestion", question);
  }
   
  }

