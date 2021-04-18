import localTimeMapper from './localTimeMapper' 
const mockData = { date: "2021-05-02", raceName: "Portuguese Grand Prix", time: "13:00:00Z" }
describe('localTimeMapper', () => {
    it('maps to local time', () => {
        expect(localTimeMapper(mockData)).toEqual("May 02 2021  at 14:00")
    })
})