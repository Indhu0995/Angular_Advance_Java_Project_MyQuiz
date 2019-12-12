import {Routes} from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { AdminComponent } from './admin/admin.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import{AddQuestionComponent}from './add-question/add-question.component';
import{SearchQuestionsComponent}from './search-questions/search-questions.component';
import{OptionsComponent}from './options/options.component';
import{UpdatequestionComponent}from './updatequestion/updatequestion.component';
import{DeletequestionComponent}from './deletequestion/deletequestion.component';
import{ListquestionComponent} from './listquestion/listquestion.component';


export const appRoutes : Routes =[
    {path:'register',component:RegisterComponent},
    {path:'quiz',component:QuizComponent},
    {path:'result',component:ResultComponent},
    {path:'Admin',component:AdminComponent},
    {path:'adminmodule',component:AdminmoduleComponent},
    {path:'addquestion',component:AddQuestionComponent,
    children: [                         
        {path:'options',component:OptionsComponent},]},
    {path:'searchquestion',component:SearchQuestionsComponent}, 
    {path:'updatequestion',component:UpdatequestionComponent}, 
    {path:'deletequestion',component:DeletequestionComponent},
    {path:'listquestion',component:ListquestionComponent}, 
    {path:'',redirectTo:'/register',pathMatch:'full'}
];