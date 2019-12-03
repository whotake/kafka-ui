import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { Topic } from '@interfaces/topic.interface';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  constructor(private service: TopicsService) { }

  data: Topic[] = [];

  ngOnInit() {
    this.loadTopics();
  }

  loadTopics(): void {
    this.service.getTopics()
      .subscribe((json => this.data = json));
  }



}
