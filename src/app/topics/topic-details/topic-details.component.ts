import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { Topic, TopicId } from '@interfaces/topic.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  constructor(
    private service: TopicsService,
    private route: ActivatedRoute,
  ) { }

  topic: Topic;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loadTopicDetails(params.get('topicId'));
    });
  }

  loadTopicDetails(id: TopicId): void {
    this.service.getTopic(id)
      .subscribe((json => this.topic = json));
  }
}
