import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TopicDetailsComponent } from './topic-details/topic-details.component';


@NgModule({
  declarations: [
    TopicsComponent,
    TopicListComponent,
    TopicDetailsComponent,
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    NgZorroAntdModule,
  ],
})
export class TopicsModule { }
