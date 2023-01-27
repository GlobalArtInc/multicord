export interface SdcStats {
  servers: number;
  shards: number;
}

export interface IError {
  error: {
      message: string,
      type: string,
      code: number;
  };
}
