import React from 'react';
import { ClusterName, ZooKeeperStatus } from 'redux/interfaces';
import { ClusterStats } from 'generated-sources';
import useInterval from 'lib/hooks/useInterval';
import cx from 'classnames';
import MetricsWrapper from 'components/common/Dashboard/MetricsWrapper';
import Indicator from 'components/common/Dashboard/Indicator';
import Breadcrumb from 'components/common/Breadcrumb/Breadcrumb';

interface Props extends ClusterStats {
  clusterName: ClusterName;
  isFetched: boolean;
  fetchClusterStats: (clusterName: ClusterName) => void;
  fetchBrokers: (clusterName: ClusterName) => void;
}

const Topics: React.FC<Props> = ({
  clusterName,
  brokerCount,
  activeControllers,
  zooKeeperStatus,
  onlinePartitionCount,
  offlinePartitionCount,
  inSyncReplicasCount,
  outOfSyncReplicasCount,
  underReplicatedPartitionCount,
  fetchClusterStats,
  fetchBrokers,
}) => {
  React.useEffect(() => {
    fetchClusterStats(clusterName);
    fetchBrokers(clusterName);
  }, [fetchClusterStats, fetchBrokers, clusterName]);

  useInterval(() => {
    fetchClusterStats(clusterName);
  }, 5000);

  const zkOnline = zooKeeperStatus === ZooKeeperStatus.online;

  return (
    <div className="section">
      <Breadcrumb>Brokers overview</Breadcrumb>

      <MetricsWrapper title="Uptime">
        <Indicator label="Total Brokers">{brokerCount}</Indicator>
        <Indicator label="Active Controllers">{activeControllers}</Indicator>
        <Indicator label="Zookeeper Status">
          <span className={cx('tag', zkOnline ? 'is-primary' : 'is-danger')}>
            {zkOnline ? 'Online' : 'Offline'}
          </span>
        </Indicator>
      </MetricsWrapper>

      <MetricsWrapper title="Partitions">
        <Indicator label="Online">
          <span
            className={cx({ 'has-text-danger': offlinePartitionCount !== 0 })}
          >
            {onlinePartitionCount}
          </span>
          <span className="subtitle has-text-weight-light">
            {' '}
            of
            {(onlinePartitionCount || 0) + (offlinePartitionCount || 0)}
          </span>
        </Indicator>
        <Indicator label="URP" title="Under replicated partitions">
          {underReplicatedPartitionCount}
        </Indicator>
        <Indicator label="In Sync Replicas">{inSyncReplicasCount}</Indicator>
        <Indicator label="Out of Sync Replicas">
          {outOfSyncReplicasCount}
        </Indicator>
      </MetricsWrapper>
    </div>
  );
};

export default Topics;
