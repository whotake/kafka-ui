package com.provectus.kafka.ui.cluster.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
@ConfigurationProperties("kafka")
@Data
public class ClustersProperties {

    List<Cluster> clusters = new ArrayList<>();

    @Data
    public static class Cluster {
        String name;
        String bootstrapServers;
        String zookeeper;
        String schemaRegistry;
        String schemaNameTemplate = "%s-value";
        String protobufFile;
        String protobufMessageName;
        int jmxPort;
    }
}
