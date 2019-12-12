import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { appRoutes } from './routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/Material';
import { AdminComponent } from './admin/admin.component';
import { AdminmoduleComponent } from './adminmodule/adminmodule.component';
import{HttpClientModule}from '@angular/common/http';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SearchQuestionsComponent } from './search-questions/search-questions.component';
import { OptionsComponent } from './options/options.component';
import { UpdatequestionComponent } from './updatequestion/updatequestion.component';
import { DeletequestionComponent } from './deletequestion/deletequestion.component';
import { ListquestionComponent } from './listquestion/listquestion.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    ResultComponent,
    AdminComponent,
    AdminmoduleComponent,
    AddQuestionComponent,
    SearchQuestionsComponent,
    OptionsComponent,
    UpdatequestionComponent,
    DeletequestionComponent,
    ListquestionComponent,
    ],

    
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
