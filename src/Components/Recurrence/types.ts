
  export enum FrequencyType {
    Daily = 'daily',
    Weekly = 'weekly',
    Monthly = 'monthly',
    Yearly = 'yearly'
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
  
  export enum MonthType {
    January = 'January',
    February = 'February',
    March = 'March',
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
  }
  export interface RecurrenceType {
    startDate: string
    endDate: string
    frequency: FrequencyType
    numberOfRepetitions: number
    weekDaysRepetition?: Array<{id : DayType, label : string}>
    onByDate : string
    onDate ?: number
    onWeek ?: string
    onDay ? : string
    onMonth ?:string
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
  