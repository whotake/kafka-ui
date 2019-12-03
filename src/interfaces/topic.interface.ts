
export type TopicId = string;

interface Configs {
  [key: string]: number | string | boolean
}

interface Replica {
  broker: number;
  leader: boolean;
  in_sync: boolean;
}

interface Partition {
  partition: number;
  leader: number;
  replicas: Replica[];
}

export interface Topic {
  name: TopicId;
  configs: Configs;
  partitions: Partition[];
}
