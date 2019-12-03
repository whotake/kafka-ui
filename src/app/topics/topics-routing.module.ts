import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicsComponent } from './topics.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';


const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
    children: [
      {
        path: '', component: TopicListComponent,
      },
      {
        path: ':topicId', component: TopicDetailsComponent,
        pathMatch: 'full',
        data: {
          breadcrumb: 'Details'
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
