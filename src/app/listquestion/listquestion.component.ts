import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { QuestionService } from '../question.service';
import { ListquestionService } from '../listquestion.service';
import { Question } from '../datamodel/question';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css']
})

export class ListquestionComponent implements OnInit {
  
  displayedColumns: string[] = ['Question'];
  questions : Question[] = [];
  dataSource = new MatTableDataSource<Question>(this.questions);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  questionService: any;
  constructor(private listquestionService : ListquestionService) { }

  ngOnInit() {
    this.allQuestions()
   
  }
  
  allQuestions(){
    this.listquestionService.getQuestionList().subscribe((data : Question[]) => {
      this.questions = data;
      console.log(this.questions);
  });
  }
  deleteQuestion(questionId:number){
    console.log(questionId);
    this.listquestionService.deleteQuestion(questionId).subscribe(
      () =>{ console.log("Question Deleted"),this.allQuestions()}
    
    )}

  questionList(questionList: any) {
    throw new Error("Method not implemented.");
  }
  criterion(criterion: any) {
    throw new Error("Method not implemented.");
  }


  
}
