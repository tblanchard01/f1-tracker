import { mockSchedule } from "../mocks/mockSchedule";
import scheduleMapper from "./scheduleMapper";
jest.mock("./localTimeMapper", () => () => "a local time");
jest.mock("./deltaTimeMapper", () => () => "mock days to go");

const expected = [
  {
    date: "2021-03-28",
    deltaTime: "mock days to go",
    key: 0,
    localTime: "a local time",
    raceName: "Bahrain Grand Prix",
    time: "15:00:00Z",
  },
  {
    date: "2021-04-18",
    deltaTime: "mock days to go",
    key: 1,
    localTime: "a local time",
    raceName: "Emilia Romagna Grand Prix",
    time: "13:00:00Z",
  },
  {
    date: "2021-05-02",
    deltaTime: "mock days to go",
    key: 2,
    localTime: "a local time",
    raceName: "Portuguese Grand Prix",
    time: "13:00:00Z",
  },
  {
    date: "2021-05-09",
    deltaTime: "mock days to go",
    key: 3,
    localTime: "a local time",
    raceName: "Spanish Grand Prix",
    time: "13:00:00Z",
  },
  {
    date: "2021-05-23",
    deltaTime: "mock days to go",
    key: 4,
    localTime: "a local time",
    raceName: "Monaco Grand Prix",
    time: "13:00:00Z",
  },
];
describe("scheduleMapper", () => {
  it("should retun expected data", () => {
    console.log(expected);
    expect(scheduleMapper(mockSchedule)).toEqual(expected);
  });
});
