import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button, Box, Flex, Text } from "@chakra-ui/react";
import Days from "./Components/Days";
import { DatePickerFormControl } from "./Components/DatePicker";
import { Formik, Form, useFormikContext } from "formik";
import { DayType, FrequencyType, RecurrenceType, WeekType } from "./Components/types";
import { SelectFormControl } from "./Components/Select";
import {
  FREQUENCY_OPTIONS,
  Week_OPTIONS,
  Day_OPTIONS,
  SelectedDays,
} from "./Components/utils";
import { InputFormControl } from "./Components/Input";
import moment from "moment";

let gap = {
  gap : "6"
}
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set recurrence</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Recurrence />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;

const today = new Date();

function Recurrence() {
  return (
    <Formik
      initialValues={{
        startDate: today,
        endDate: today,
        frequency: FrequencyType.Weekly,
        numberOfRepetitions: 1,
        weekDaysRepetition: SelectedDays,
        weekInterval: WeekType.First,
        dayInterval: DayType.Monday,
      }}
      onSubmit={(e) => {}}
    >
      {(form) => (
        <Form>
          {/* start Date */}
          <Flex alignItems={"center"} {...gap}>
            <Title title={"Start"} />
            <Box width={"50%"}>
              <DatePickerFormControl name="startDate" />
            </Box>
          </Flex>

          {/* Body */}
          <Box py="6">
            <FrequencySelector />
          </Box>
          {/* End Date */}
          <Flex alignItems={"center"} {...gap}>
          <Title title={"End"} />
            <Box width={"50%"}>
              <DatePickerFormControl name="endDate" />
            </Box>
          </Flex>
          {/* Text */}
          <RenderText value={form.values} />
        </Form>
      )}
    </Formik>
  );
}

function FrequencySelector() {
  const { values }: any = useFormikContext();

  return (
    <>
      <Flex {...gap}>
        <Title title="Repeat every" />
        <InputFormControl name="numberOfRepetitions" required={false} />
        <SelectFormControl
          name="frequency"
          required={false}
          options={FREQUENCY_OPTIONS}
        />
      </Flex>
      <Box pt={6}>
      {values?.frequency === FrequencyType.Weekly && (
        <Days name="weekDaysRepetition" />
      )}
      {values?.frequency === FrequencyType.Monthly && (
        <Flex>
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
        </Flex>
      )}
      </Box>
    </>
  );
}

function RenderText({ value }: { value: RecurrenceType }) {
  let TEXT = "Occurs ";
  if(value.frequency === FrequencyType.Daily) {
    if(value?.numberOfRepetitions && value?.numberOfRepetitions != 1) TEXT = TEXT + ` every ${value?.numberOfRepetitions} days `
    else TEXT = TEXT + ` every day `
  }
  if(value.frequency === FrequencyType.Weekly) {
    if(value?.numberOfRepetitions && value?.numberOfRepetitions != 1) TEXT = TEXT + ` every ${value?.numberOfRepetitions} weeks `;
    if( value?.weekDaysRepetition?.length && value?.numberOfRepetitions == 1)  TEXT = TEXT + ` every ` +  value?.weekDaysRepetition.map((i:any) => i?.id)?.join(', ').replace(/, ([^,]*)$/, ' and $1')
    if( value?.weekDaysRepetition?.length && value?.numberOfRepetitions != 1)  TEXT = TEXT + ` on ` +  value?.weekDaysRepetition.map((i:any) => i?.id)?.join(', ').replace(/, ([^,]*)$/, ' and $1')
    else TEXT = TEXT + ` every week `
  }
  if(value.frequency === FrequencyType.Monthly) {
    if(value?.numberOfRepetitions && value?.numberOfRepetitions == 1) TEXT = TEXT + ` every month `
    if(value?.numberOfRepetitions && value?.numberOfRepetitions != 1) TEXT = TEXT + ` every ${value?.numberOfRepetitions} months `
    if(value?.weekInterval && value?.dayInterval) TEXT = TEXT + ` on ${value?.weekInterval} ${value?.dayInterval} `
   
  }
  if(value.startDate) {
    TEXT = TEXT + ` starting ` + moment(value.startDate).format()
  }
  if(value.endDate) {
    TEXT = TEXT + ` until ` + value.endDate
  }
  return <Text>{TEXT}</Text>
}

function Title({title}:{title : string}) {
  return  <Flex width={"100px"} border="1px solid red"><Text>{title}</Text></Flex>
}