/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SystemReadSyncDestinationsGcpSmNameResponse
 */
export interface SystemReadSyncDestinationsGcpSmNameResponse {
    /**
     * List of key value pairs of information necessary to connect with the external system.
     * @type {object}
     * @memberof SystemReadSyncDestinationsGcpSmNameResponse
     */
    connectionDetails?: object;
    /**
     * Name of this secrets store.
     * @type {string}
     * @memberof SystemReadSyncDestinationsGcpSmNameResponse
     */
    name?: string;
    /**
     * Type of this secrets store.
     * @type {string}
     * @memberof SystemReadSyncDestinationsGcpSmNameResponse
     */
    type?: string;
}

/**
 * Check if a given object implements the SystemReadSyncDestinationsGcpSmNameResponse interface.
 */
export function instanceOfSystemReadSyncDestinationsGcpSmNameResponse(value: object): value is SystemReadSyncDestinationsGcpSmNameResponse {
    return true;
}

export function SystemReadSyncDestinationsGcpSmNameResponseFromJSON(json: any): SystemReadSyncDestinationsGcpSmNameResponse {
    return SystemReadSyncDestinationsGcpSmNameResponseFromJSONTyped(json, false);
}

export function SystemReadSyncDestinationsGcpSmNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemReadSyncDestinationsGcpSmNameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'connectionDetails': json['connection_details'] == null ? undefined : json['connection_details'],
        'name': json['name'] == null ? undefined : json['name'],
        'type': json['type'] == null ? undefined : json['type'],
    };
}

export function SystemReadSyncDestinationsGcpSmNameResponseToJSON(json: any): SystemReadSyncDestinationsGcpSmNameResponse {
    return SystemReadSyncDestinationsGcpSmNameResponseToJSONTyped(json, false);
}

export function SystemReadSyncDestinationsGcpSmNameResponseToJSONTyped(value?: SystemReadSyncDestinationsGcpSmNameResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'connection_details': value['connectionDetails'],
        'name': value['name'],
        'type': value['type'],
    };
}

