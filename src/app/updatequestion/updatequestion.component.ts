import { Component, OnInit } from '@angular/core';
import { Update } from '../datamodel/Update';
import { UpdateService } from '../update.service';
import { Question } from '../datamodel/question';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-updatequestion',
  templateUrl: './updatequestion.component.html',
  styleUrls: ['./updatequestion.component.css']
})
export class UpdatequestionComponent implements OnInit {

  update : Update = new Update();
  questionContent: any;
  questionService: any;
  questionList: any;

  constructor(private updateservice : UpdateService) { }

  ngOnInit() {
    this.search();

    //this.questionContent = this.updateservice.questionContent();

  }

  
  search(){
    this.questionService.getQuestionList(this.criterion).subscribe((data: any) => {
      
      this.questionList = data;
      console.log(this.questionList);
  });
  }
  criterion(criterion: any) {
    throw new Error("Method not implemented.");
  }
  save(){
    console.log(this.questionContent);
    this.updateservice.save(this.questionContent).subscribe((res : Question) =>
    { this.questionContent = res;
      console.log(this.questionContent)
    }); 
  }
  

}
