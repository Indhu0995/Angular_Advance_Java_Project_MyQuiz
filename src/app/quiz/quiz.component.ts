import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { ListquestionService } from '../listquestion.service';
import { Question } from '../datamodel/question';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  QuestionService: any;
  questions: any;
  opendialog(){
    
  }

  constructor(private listquestionService : ListquestionService, ) { }

  ngOnInit() {  
   
    }
    prepareQuiz(newQuizName: string) {
      this.listquestionService.getQuestionList().subscribe((data : Question[]) => {
        this.questions = data;
        console.log(this.questions);
 

      });
    
    


  }
}
