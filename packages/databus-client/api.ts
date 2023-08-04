/* tslint:disable */
/* eslint-disable */
/**
 * databus-server
 * databus-server APIs
 *
 * The version of the OpenAPI document: 0.23.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';


/**
 * CrateApi - axios parameter creator
 * @export
 */
export const CrateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Homepage, for liveness check
         * @summary Homepage, for liveness check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        databusHome: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/databus`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CrateApi - functional programming interface
 * @export
 */
export const CrateApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CrateApiAxiosParamCreator(configuration)
    return {
        /**
         * Homepage, for liveness check
         * @summary Homepage, for liveness check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async databusHome(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.databusHome(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CrateApi - factory interface
 * @export
 */
export const CrateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CrateApiFp(configuration)
    return {
        /**
         * Homepage, for liveness check
         * @summary Homepage, for liveness check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        databusHome(options?: any): AxiosPromise<void> {
            return localVarFp.databusHome(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CrateApi - object-oriented interface
 * @export
 * @class CrateApi
 * @extends {BaseAPI}
 */
export class CrateApi extends BaseAPI {
    /**
     * Homepage, for liveness check
     * @summary Homepage, for liveness check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CrateApi
     */
    public databusHome(options?: AxiosRequestConfig) {
        return CrateApiFp(this.configuration).databusHome(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DataDaoApiApi - axios parameter creator
 * @export
 */
export const DataDaoApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get AI\'s binding datasheet ids by AI ID
         * @summary Get AI\'s binding datasheet ids by AI ID
         * @param {string} aiId ai id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        daoGetAiDatasheetIds: async (aiId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiId' is not null or undefined
            assertParamExists('daoGetAiDatasheetIds', 'aiId', aiId)
            const localVarPath = `/databus/dao/get_ai_datasheet_ids/{ai_id}`
                .replace(`{${"ai_id"}}`, encodeURIComponent(String(aiId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get AI Entity by AI ID
         * @summary Get AI Entity by AI ID
         * @param {string} aiId ai id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        daoGetAiPo: async (aiId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'aiId' is not null or undefined
            assertParamExists('daoGetAiPo', 'aiId', aiId)
            const localVarPath = `/databus/dao/get_ai/{ai_id}`
                .replace(`{${"ai_id"}}`, encodeURIComponent(String(aiId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataDaoApiApi - functional programming interface
 * @export
 */
export const DataDaoApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataDaoApiApiAxiosParamCreator(configuration)
    return {
        /**
         * Get AI\'s binding datasheet ids by AI ID
         * @summary Get AI\'s binding datasheet ids by AI ID
         * @param {string} aiId ai id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async daoGetAiDatasheetIds(aiId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.daoGetAiDatasheetIds(aiId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get AI Entity by AI ID
         * @summary Get AI Entity by AI ID
         * @param {string} aiId ai id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async daoGetAiPo(aiId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.daoGetAiPo(aiId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataDaoApiApi - factory interface
 * @export
 */
export const DataDaoApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataDaoApiApiFp(configuration)
    return {
        /**
         * Get AI\'s binding datasheet ids by AI ID
         * @summary Get AI\'s binding datasheet ids by AI ID
         * @param {string} aiId ai id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        daoGetAiDatasheetIds(aiId: string, options?: any): AxiosPromise<void> {
            return localVarFp.daoGetAiDatasheetIds(aiId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get AI Entity by AI ID
         * @summary Get AI Entity by AI ID
         * @param {string} aiId ai id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        daoGetAiPo(aiId: string, options?: any): AxiosPromise<void> {
            return localVarFp.daoGetAiPo(aiId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataDaoApiApi - object-oriented interface
 * @export
 * @class DataDaoApiApi
 * @extends {BaseAPI}
 */
export class DataDaoApiApi extends BaseAPI {
    /**
     * Get AI\'s binding datasheet ids by AI ID
     * @summary Get AI\'s binding datasheet ids by AI ID
     * @param {string} aiId ai id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataDaoApiApi
     */
    public daoGetAiDatasheetIds(aiId: string, options?: AxiosRequestConfig) {
        return DataDaoApiApiFp(this.configuration).daoGetAiDatasheetIds(aiId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get AI Entity by AI ID
     * @summary Get AI Entity by AI ID
     * @param {string} aiId ai id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataDaoApiApi
     */
    public daoGetAiPo(aiId: string, options?: AxiosRequestConfig) {
        return DataDaoApiApiFp(this.configuration).daoGetAiPo(aiId, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * DataServicesApiApi - axios parameter creator
 * @export
 */
export const DataServicesApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id datasheet id
         * @param {string} [userId] 
         * @param {string} [spaceId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDatasheetPack: async (id: string, userId?: string, spaceId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDatasheetPack', 'id', id)
            const localVarPath = `/databus/get_datasheet_pack/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            if (spaceId !== undefined) {
                localVarQueryParameter['spaceId'] = spaceId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataServicesApiApi - functional programming interface
 * @export
 */
export const DataServicesApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataServicesApiApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} id datasheet id
         * @param {string} [userId] 
         * @param {string} [spaceId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDatasheetPack(id: string, userId?: string, spaceId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDatasheetPack(id, userId, spaceId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataServicesApiApi - factory interface
 * @export
 */
export const DataServicesApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataServicesApiApiFp(configuration)
    return {
        /**
         * 
         * @param {string} id datasheet id
         * @param {string} [userId] 
         * @param {string} [spaceId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDatasheetPack(id: string, userId?: string, spaceId?: string, options?: any): AxiosPromise<void> {
            return localVarFp.getDatasheetPack(id, userId, spaceId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataServicesApiApi - object-oriented interface
 * @export
 * @class DataServicesApiApi
 * @extends {BaseAPI}
 */
export class DataServicesApiApi extends BaseAPI {
    /**
     * 
     * @param {string} id datasheet id
     * @param {string} [userId] 
     * @param {string} [spaceId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataServicesApiApi
     */
    public getDatasheetPack(id: string, userId?: string, spaceId?: string, options?: AxiosRequestConfig) {
        return DataServicesApiApiFp(this.configuration).getDatasheetPack(id, userId, spaceId, options).then((request) => request(this.axios, this.basePath));
    }
}


