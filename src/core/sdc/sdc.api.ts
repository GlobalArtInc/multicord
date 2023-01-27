import axios, { AxiosRequestConfig, Method } from 'axios';

export class SdcApi {
  private apiUrl = 'https://api.server-discord.com/v2';
  
  public async send<R = unknown>(method: Method, url: string, data: object, config?: Partial<AxiosRequestConfig>): Promise<R> {
    const reqConfig: AxiosRequestConfig = {
      method,
      url: `${this.apiUrl}/${url}`,
      ...config,
    };
    switch (method.toLowerCase()) {
      case 'get':
      case 'delete':
        reqConfig.params = data;
        break;
      case 'post':
      case 'put':
      case 'patch':
        reqConfig.data = data;
        break;
      default:
        break;
    }

    return new Promise<R>((resolve, reject) => axios(reqConfig)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.data)));
  }

}