import { InputFormControl } from "../FormComponents/Input";
import { SelectFormControl } from "../FormComponents/Select";
import Days from "./Days";
import { FrequencyType } from "./types";
import { Day_OPTIONS, FREQUENCY_OPTIONS, gap, Week_OPTIONS } from "./utils";
import { useFormikContext } from "formik";
import { Flex, Box, Text, Grid } from "@chakra-ui/react";
export function FrequencySelector() {
  const { values }: any = useFormikContext();

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
        <Box pt={6} >
          <Grid gap={3} gridTemplateColumns={"0.4fr 1fr 1fr"} alignItems="center">
            <Text>On the</Text>
            <SelectFormControl
              name="weekInterval"
              required={false}
              options={Week_OPTIONS}
            />
            <SelectFormControl
              name="dayInterval"
              required={false}
              options={Day_OPTIONS}
            />
          </Grid>
        </Box>
      )}
    </>
  );
}
