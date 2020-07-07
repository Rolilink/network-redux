declare enum NetworkRequestStatusEnum {
  IN_PROGRESS = 'in-progress',
  SUCCESS = 'success',
  ERROR = 'error',
}

declare enum NetworkRequestMethodsEnum {
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

declare interface INetworkRequestError extends Error {
  code?: string,
}

declare interface INetworkRequest {
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

declare interface Dictionary<T> {
  [Key: string]: T,
}
