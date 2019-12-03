import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Topic, TopicId } from '@interfaces/topic.interface';
import { forkJoin } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8082';

  getTopic = (id: TopicId) => this.http.get<Topic>(`${this.url}/topics/${id}`);

  getTopics () {
    return this.http.get<TopicId[]>(`${this.url}/topics`).pipe(
      flatMap((topicIds) => forkJoin<Topic>(topicIds.map(this.getTopic))),
    );
  }
}
