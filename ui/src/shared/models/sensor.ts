import * as kubernetes from 'argo-ui/src/models/kubernetes';

import {Condition} from './workflows';

export interface Sensor {
    metadata: kubernetes.ObjectMeta;
    spec: {
        dependencies: {
            name: string;
            eventSourceName: string;
            eventName: string;
        }[];
        triggers: {
            template?: {
                name: string;
                conditions?: string;
                argoWorkflow?: any;
                awsLambda?: any;
                custom?: any;
                http?: any;
                k8s?: any;
                log?: any;
                kafka?: any;
                nats?: any;
                openWhisk?: any;
                slack?: any;
            };
        }[];
    };
    status?: {conditions?: Condition[]};
}

export interface SensorList {
    metadata: kubernetes.ListMeta;
    items: Sensor[];
}

export interface LogEntry {
    namespace: string;
    sensorName: string;
    triggerName?: string;
    level: string;
    time: kubernetes.Time;
    msg: string;
}

export type SensorWatchEvent = kubernetes.WatchEvent<Sensor>;

export const TriggerTypes = ['argoWorkflow', 'awsLambda', 'custom', 'http', 'k8s', 'kafka', 'log', 'nats', 'openWhisk', 'slack'] as const;
export type TriggerType = (typeof TriggerTypes)[number];
