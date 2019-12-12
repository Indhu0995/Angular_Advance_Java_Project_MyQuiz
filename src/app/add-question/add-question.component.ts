import { Component, OnInit } from '@angular/core';
import { Question } from '../datamodel/question';
import { QuestionService } from '../question.service';
import { OptionService } from '../option.service';
import { Router } from '@angular/router';
import { Option } from '../datamodel/Option';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question : Question = new Question();
  option: Option;
  id : number;

  constructor(private questionService : QuestionService, private optionService : OptionService,private router : Router) { }

  ngOnInit() {
  }

  save(){
   
    this.questionService.save(this.question).subscribe((res : Question) =>
    {
       this.question = res;
       this.id= this.question.id;
   

      for( let optiond of this.questionService.options)
      this.option=optiond
      console.log(this.option);
    var postData1 = {
    "qReference" :  this.id,
    ...this.option
     }
   console.log(postData1)
      this.optionService.save(postData1).subscribe ((res : Option) =>
    { 
      this.option = res;
      console.log(this.option.id)
    }); 
  });
    

    
   
  }
  addOption(){
    this.router.navigate(['/options']);
  }

}
