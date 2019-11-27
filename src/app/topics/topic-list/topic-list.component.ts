import { Component, OnInit } from '@angular/core';

interface TopicData {
  title: string;
  partitions: number;
  replication: number;
  configs: number;
}

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  constructor() { }

  data: TopicData[] = [];

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        title: `ant design part ${index}`,
        partitions: 10,
        replication: 1,
        configs: 22,
      };
    });
  }



}
