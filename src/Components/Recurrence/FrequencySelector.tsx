import { InputFormControl } from "../FormComponents/Input";
import { SelectFormControl } from "../FormComponents/Select";
import Days from "./Days";
import { FrequencyType, RecurrenceType } from "./types";
import {
  Day_OPTIONS,
  FREQUENCY_OPTIONS,
  gap,
  MONTH_OPTIONS,
  Week_OPTIONS,
} from "./utils";
import { useFormikContext } from "formik";
import { Flex, Box, Text, Grid, Stack, Radio } from "@chakra-ui/react";
import { RadioGroupFormControl } from "../FormComponents/RadioGroup";
export function FrequencySelector() {
  const { values }: { values: RecurrenceType } = useFormikContext();

  return (
    <>
      <Flex {...gap}>
        <InputFormControl name="numberOfRepetitions" required={false} />
        <SelectFormControl
          name="frequency"
          required={false}
          options={FREQUENCY_OPTIONS}
        />
      </Flex>

      {values?.frequency === FrequencyType.Weekly && (
        <Box pt={6}>
          <Days name="weekDaysRepetition" />
        </Box>
      )}
      {values?.frequency === FrequencyType.Monthly && (
        <Box pt={6}>
          <RadioGroupFormControl required={false} name={"onByDate"} label={""}>
            <Grid gridTemplateColumns={"0.1fr 1fr"} gap={4}>
              <Radio fontSize="14px" data-testid="yes_button" value={"true"} />
              <Grid
                gap={3}
                gridTemplateColumns={"0.3fr 0.5fr"}
                alignItems="center"
              >
                <Text>On day</Text>
                <InputFormControl
                  name="onDate"
                  required={false}
                  disabled={values.onByDate === "false"}
                />
              </Grid>
              <Radio fontSize="14px" data-testid="no_button" value={"false"} />

              <Grid
                gap={3}
                gridTemplateColumns={"0.4fr 1fr 1fr"}
                alignItems="center"
              >
                <Text>On the</Text>
                <SelectFormControl
                  name="onWeek"
                  required={false}
                  options={Week_OPTIONS}
                  disabled={values.onByDate === "true"}
                />
                <SelectFormControl
                  name="onDay"
                  required={false}
                  options={Day_OPTIONS}
                  disabled={values.onByDate === "true"}
                />
              </Grid>
            </Grid>
          </RadioGroupFormControl>
        </Box>
      )}
      {values?.frequency === FrequencyType.Yearly && (
        <Box pt={6}>
          <RadioGroupFormControl required={false} name={"onByDate"} label={""}>
            <Grid gridTemplateColumns={"0.1fr 1fr"} gap={4}>
              <Radio fontSize="14px" data-testid="yes_button" value={"true"} />
              <Grid
                gap={3}
                gridTemplateColumns={"0.1fr 0.6fr 0.2fr"}
                alignItems="center"
              >
                <Text>On</Text>
                <SelectFormControl
                  name="onMonth"
                  required={false}
                  options={MONTH_OPTIONS}
                  disabled={values.onByDate === "false"}
                />
                <InputFormControl
                  name="onDate"
                  required={false}
                  disabled={values.onByDate === "false"}
                />
              </Grid>
              <Radio fontSize="14px" data-testid="no_button" value={"false"} />

              <Grid
                gap={3}
                gridTemplateColumns={"0.6fr 1fr 1fr 0.2fr 1fr"}
                alignItems="center"
              >
                <Text>On the</Text>
                <SelectFormControl
                  name="onWeek"
                  required={false}
                  options={Week_OPTIONS}
                  disabled={values.onByDate === "true"}
                />
                <SelectFormControl
                  name="onDay"
                  required={false}
                  options={Day_OPTIONS}
                  disabled={values.onByDate === "true"}
                />
                <Text>Of</Text>
                <SelectFormControl
                  name="onMonth"
                  required={false}
                  options={MONTH_OPTIONS}
                  disabled={values.onByDate === "true"}
                />
              </Grid>
            </Grid>
          </RadioGroupFormControl>
        </Box>
      )}
    </>
  );
}
