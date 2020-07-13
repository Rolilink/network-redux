export enum NetworkRequestStatusEnum {
  IN_PROGRESS = 'in-progress',
  SUCCESS = 'success',
  ERROR = 'error',
  INVALIDATED = 'invalidated', // an invalidated request no longer have relevance for the current UI
}

export enum NetworkRequestMethodsEnum {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
  OPTIONS = 'options',
  CONNECT = 'connect',
  HEAD = 'head',
  TRACE = 'trace',
}

export interface INetworkRequestError extends Error {
  code?: string,
}

export interface INetworkRequest {
  id: string,
  status: NetworkRequestStatusEnum,
  url: string,
  method: NetworkRequestMethodsEnum,
  query?: any,
  body?: any,
  meta?: any,
  startedAt: Date,
  finishedAt?: Date,
  error?: INetworkRequestError,
}
