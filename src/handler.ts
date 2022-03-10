import { Handler } from 'aws-lambda'

/**
 * Interface to match the request mapping template
 * defined in `/openapi.yml`
 */
export interface ApiRequest {
  method: string
  url: string
  headers: { [key: string]: string }
  pathParams: never
  queryParams: { name: string }
  body: never
  principalId: string
}

/**
 * Interface to define your custom response
 */
export interface ApiResponse {
  output: string
  input: ApiRequest
}

export const hello: Handler<ApiRequest, ApiResponse> = async (event, _context) => {
  try {
    // successful returns will be transformed using any
    // response mapping templates based on patterns
    // matched. Fallback to default of 200
    return {
      output: `Hello ${event.queryParams.name}! Thanks for using Serverless Webpack (Typescript)! Your function executed successfully!`,
      input: event
    }
  } catch (error: unknown) {
    // errors thrown will be transformed using the response
    // mapping templates defined in the openapi.yml
    throw new Error('[InternalServerError] There was an unknown problem')
  }
}
