import Samuel from '../src'

describe('Samuel object', () => {
  it('should have a log property', () => {
    expect(Samuel).toHaveProperty('log')
  })
  it('should have a jackson property', () => {
    expect(Samuel.log).toHaveProperty('jackson')
  })
})

describe('jackson function', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should output a info message', () => {
    const consoleInfoMock = jest.spyOn(console, 'info').mockImplementation();
    Samuel.log.jackson('Hello World', Samuel.INFO)
    expect(console.info).toBeCalled()
    expect(consoleInfoMock.mock.calls[0][0]).toContain('Look at')
    consoleInfoMock.mockRestore();
  })

  it('should output a error message', () => {
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
    Samuel.log.jackson('Hello World', Samuel.ERROR)
    expect(console.error).toBeCalled()
    expect(consoleErrorMock.mock.calls[0][0]).toContain("I'm tired")
    consoleErrorMock.mockRestore();
  })

  it('should output a log message', () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    Samuel.log.jackson('Hello World', Samuel.LOG)
    expect(console.log).toBeCalled()
    expect(consoleLogMock.mock.calls[0][0]).toContain("Ah Console.log, when you")
    consoleLogMock.mockRestore();
  })

})