import { DayType, FrequencyType, Option, WeekType } from "./types";

export const FREQUENCY_OPTIONS: Option[] = [
  {
    value: FrequencyType.Daily,
    label: "Daily",
  },
  {
    value: FrequencyType.Weekly,
    label: "Weekly",
  },
  {
    value: FrequencyType.Monthly,
    label: "Monthly",
  },
];

export const Week_OPTIONS: Option[] = [
  {
    value: WeekType.First,
    label: "First",
  },
  {
    value: WeekType.Second,
    label: "Second",
  },
  {
    value: WeekType.Third,
    label: "Third",
  },
  {
    value: WeekType.Fourth,
    label: "Fourth",
  },
  {
    value: WeekType.Last,
    label: "Last",
  },
];
export const Day_OPTIONS: Option[] = [
  {
    value: DayType.Sunday,
    label: "Sunday",
  },
  {
    value: DayType.Monday,
    label: "Monday",
  },
  {
    value: DayType.Tuesday,
    label: "Tuesday",
  },
  {
    value: DayType.WednesDay,
    label: "WednesDay",
  },
  {
    value: DayType.Thursday,
    label: "Thursday",
  },

  {
    value: DayType.Friday,
    label: "Friday",
  },
  {
    value: DayType.Saturday,
    label: "Saturday",
  },
];

export let SelectedDays= [
    {
        label: "M",
        id: DayType.Monday,
      },
      {
        label: "T",
        id: DayType.Tuesday,
      },
      {
        label: "W",
        id: DayType.WednesDay,
      },
      {
        label: "T",
        id: DayType.Thursday,
      },
      {
        label: "F",
        id: DayType.Friday,
      },
]
export let DayInput = [
  {
    label: "S",
    id: DayType.Sunday,
  },
  {
    label: "M",
    id: DayType.Monday,
  },
  {
    label: "T",
    id: DayType.Tuesday,
  },
  {
    label: "W",
    id: DayType.WednesDay,
  },
  {
    label: "T",
    id: DayType.Thursday,
  },
  {
    label: "F",
    id: DayType.Friday,
  },
  {
    label: "S",
    id: DayType.Saturday,
  },
];
