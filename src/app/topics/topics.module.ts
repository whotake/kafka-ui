import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsRoutingModule } from './topics-routing.module';
import { TopicsComponent } from './topics.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    TopicsComponent,
    TopicListComponent,
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    NgZorroAntdModule,
  ],
})
export class TopicsModule { }
