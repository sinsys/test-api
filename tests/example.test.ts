import { hello, ApiRequest, ApiResponse } from '@src/handler'
import { Context } from 'aws-lambda'
import { Mock } from 'moq.ts'
const mockContext = new Mock<Context>()
const mockRequest = new Mock<ApiRequest>()
  .setup(instance => instance.queryParams)
  .returns({ name: 'TESTED' })

describe('who tests the tests?', () => {
  it('can run a test', async () => {
    expect.hasAssertions()
    const result = await hello(mockRequest.object(), mockContext.object(), () => {}) as ApiResponse
    expect(result.input.queryParams.name).toBe('TESTED')
  })
})
