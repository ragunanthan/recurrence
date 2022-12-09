
import { Flex, Text,Tr,Td , Tbody, Table } from '@chakra-ui/react';
import {Form  } from 'formik';
import { DatePickerFormControl } from '../FormComponents/DatePicker';
import { Formik } from 'formik';
import { DayType, FrequencyType, MonthType, WeekType } from './types';
import { SelectedDays } from './utils';
import { FrequencySelector } from './FrequencySelector';
import { RenderText } from './OccursAt';

type RecurrenceType = {
    maxW?: string | number;
}

const today = new Date().toISOString().slice(0, -14);
let styleTitle = { borderBottom : "none", p : "0", width : "20%", textAlign : "end", };

export function Recurrence({maxW} : RecurrenceType) {
  return (
    <Formik
      initialValues={{
        startDate: today,
        endDate: "",
        frequency: FrequencyType.Daily,
        numberOfRepetitions: 1,
        
        onByDate : "false",
        weekDaysRepetition: SelectedDays,
        onDate : 1,
        onWeek: WeekType.First,
        onDay: DayType.Monday,
        onMonth : MonthType.January
      }}
      onSubmit={(e) => {}}
    >
      {(form) => (
        <Form>
          <Table maxW={maxW}>
            <Tbody>
              <Tr >
                <Td sx={styleTitle}><Title title={"Start"} /></Td>
                <Td borderBottom={"none"}><DatePickerFormControl name="startDate" /></Td>
              </Tr>
              <Tr>
                <Td sx={styleTitle}><Title title={"Repeat every"} /></Td>
                <Td borderBottom={"none"}><FrequencySelector /></Td>
              </Tr>
              <Tr>
                <Td sx={styleTitle}><Title title={"End"} /></Td>
                <Td borderBottom={"none"}><DatePickerFormControl name="endDate" /></Td>
              </Tr>
              <Tr>
                <Td borderBottom={"none"}></Td>
                <Td borderBottom={"none"}><RenderText value={form.values} /></Td>
              </Tr>
            </Tbody>
          </Table>
     
        </Form>
      )}
    </Formik>
  );
}



function Title({title}:{title : string}) {
  return <Text>{title}</Text>
}