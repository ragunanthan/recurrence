import moment from "moment";
import { FrequencyType, RecurrenceType } from "./types";
import { Text } from "@chakra-ui/react";

export function RenderText({ value }: { value: RecurrenceType }) {
  let TEXT = "Occurs ";
  if (value.frequency === FrequencyType.Daily) {
    if (value?.numberOfRepetitions && value?.numberOfRepetitions != 1)
      TEXT = TEXT + ` every ${value?.numberOfRepetitions} days `;
    else TEXT = TEXT + ` every day `;
  }
  if (value.frequency === FrequencyType.Weekly) {
    if (value?.numberOfRepetitions && value?.numberOfRepetitions != 1)
      TEXT = TEXT + ` every ${value?.numberOfRepetitions} weeks `;
    if (value?.weekDaysRepetition?.length && value?.numberOfRepetitions == 1)
      TEXT =
        TEXT +
        ` every ` +
        value?.weekDaysRepetition
          .map((i: any) => i?.id)
          ?.join(", ")
          .replace(/, ([^,]*)$/, " and $1");
    if (value?.weekDaysRepetition?.length && value?.numberOfRepetitions != 1)
      TEXT =
        TEXT +
        ` on ` +
        value?.weekDaysRepetition
          .map((i: any) => i?.id)
          ?.join(", ")
          .replace(/, ([^,]*)$/, " and $1");
    else TEXT = TEXT + ` every week `;
  }
  if (value.frequency === FrequencyType.Monthly) {
    if (value.onByDate === "false") {
      if (value?.numberOfRepetitions && value?.numberOfRepetitions == 1)
        TEXT = TEXT + ` every month `;
      if (value?.numberOfRepetitions && value?.numberOfRepetitions != 1)
        TEXT = TEXT + ` every ${value?.numberOfRepetitions} months `;
      if (value?.onWeek && value?.onDay)
        TEXT = TEXT + ` on ${value?.onWeek} ${value?.onDay} `;
    } else {
      if (value.onDate && value?.numberOfRepetitions == 1)
        TEXT = TEXT + `every month on day ${value.onDate}`;
      else
        TEXT =
          TEXT +
          `every ${value?.numberOfRepetitions} months on day ${value.onDate}`;
    }
  }

  if (value.startDate) {
    TEXT = TEXT + ` starting ` + moment(value.startDate).format("DD-MM-YYYY");
  }
  if (value.endDate) {
    TEXT = TEXT + ` until ` + moment(value.startDate).format("DD-MM-YYYY");
  }
  return <Text>{TEXT}</Text>;
}
