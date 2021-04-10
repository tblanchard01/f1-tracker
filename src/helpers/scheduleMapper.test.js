import { mockSchedule } from "../mocks/mockSchedule";
import scheduleMapper from "./scheduleMapper";

const expected = 
  [{"date": "2021-03-28",
   "key": 0, "raceName": "Bahrain Grand Prix", "time": "15:00:00Z"}, {"date": "2021-04-18", "key": 1, "raceName": "Emilia Romagna Grand Prix", "time": "13:00:00Z"}, {"date": "2021-05-02", "key": 2, "raceName": "Portuguese Grand Prix", "time": "13:00:00Z"}, {"date": "2021-05-09", "key": 3, "raceName": "Spanish Grand Prix", "time": "13:00:00Z"}, {"date": "2021-05-23", "key": 4, "raceName": "Monaco Grand Prix", "time": "13:00:00Z"}]
;

describe("scheduleMapper", () => {
  it("should retun expected data", () => {
    expect(scheduleMapper(mockSchedule)).toEqual(expected);

  });
});
