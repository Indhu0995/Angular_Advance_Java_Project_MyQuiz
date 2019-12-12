import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../datamodel/question';

@Component({
  selector: 'app-search-questions',
  templateUrl: './search-questions.component.html',
  styleUrls: ['./search-questions.component.css']
})
export class SearchQuestionsComponent implements OnInit {

  questionList : Question[];
  criterion : string;


  constructor(private questionService : QuestionService) { }

  ngOnInit() {
   this.search();
  }

  search(){
    this.questionService.getQuestionList(this.criterion).subscribe((data) => {
      
      this.questionList = data;
      console.log(this.questionList);
  });
  }


}
