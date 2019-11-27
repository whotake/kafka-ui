import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicsComponent } from './topics.component';


const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
    children: [
      {
        path: '', component: TopicListComponent,
        data: {
          breadcrumb: 'Display Name'
        }
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicsRoutingModule { }
