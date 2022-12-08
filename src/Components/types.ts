
  export enum FrequencyType {
    Daily = 'daily',
    Weekly = 'weekly',
    Monthly = 'monthly'
  }
  
  export enum DayType {
    Sunday = "Sunday",
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    WednesDay = 'WednesDay',
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
  }

  export enum WeekType {
    First = 'First',
    Second = 'Second',
    Third = 'Third',
    Fourth = "Fourth",
    Last = "Last",
  }


  export interface RecurrenceType {
    startDate: Date
    endDate: Date
    frequency: FrequencyType
    numberOfRepetitions: number
    weekDaysRepetition?: Array<{id : DayType, label : string}>
    weekInterval ?: string
    dayInterval ? : string
  }
  
  export interface RecurrenceDay {
    key: number
    title: string
    symbol: string
  }
  
  export interface Option {
    value: string
    label: string
  }
  