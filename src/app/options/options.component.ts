import { Component, OnInit } from '@angular/core';
import { OptionService } from '../option.service';
import { Option } from '../datamodel/Option';
import { NgForm } from '@angular/forms';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  option : Option = new Option();
 
  

  constructor(private OptionService : OptionService,private questionService : QuestionService) { }

  ngOnInit() {

    
  
  }
  
 

  saveOptions(){
    console.log(this.option);
    this.OptionService.save(this.option).subscribe ((res : Option) =>
    {
       this.option = res;

    }); 
  }
    
  onSubmit(form:NgForm){
    console.log(form.value);
    this.questionService.options.push(form.value)
  }

}
