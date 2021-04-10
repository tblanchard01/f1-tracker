import getTimeDelta from './getTimeDelta'
const mockData = { date: "2021-05-02", raceName: "Portuguese Grand Prix", time: "13:00:00Z" }
describe('getTimeDelta', () => {
  it('should return number of days between race and today', () => {
    const mockToday = new Date("2021-05-01")
    expect(getTimeDelta(mockData, mockToday)).toEqual(1)

  })
})