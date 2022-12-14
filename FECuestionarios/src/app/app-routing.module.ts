import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {QuestionComponent} from "./Components/question/question.component";
import {ResultsComponent} from "./Components/results/results.component";
import { SummaryComponent } from './Components/summary/summary.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'question', component:QuestionComponent},
  {path: 'results', component:ResultsComponent},
  {path: 'summary', component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
