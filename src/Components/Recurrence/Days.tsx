import { Box, Text, Flex } from "@chakra-ui/react";
import { useField } from 'formik';
import { DayInput } from "./utils";

type DaysPropType = {
  selected: {label : string, id : string}[];
  setSelected: (selectedItem: {label : string, id : string}[]) => void;
};


export  function Days({ selected, setSelected }: DaysPropType) {
    let isSelected = (day: string) => selected.map(i => i.id).includes(day);

  return (
    <Flex gap="2">
      {DayInput.map((day) => (
        <Box
          cursor={"pointer"}
          _hover={{ bg: isSelected(day.id) ? "" : "#f0f0f0" }}
          width="30px"
          height={"30px"}
          borderRadius={"50%"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          bg={isSelected(day.id) ? "#5b5fc7" : ""}
          color={isSelected(day.id) ? "white" : ""}
          onClick={() => {
            console.log(selected);
            if(isSelected(day.id)){
                let filterArr = selected.filter(i => i.id !== day.id);
                setSelected(filterArr);
            }
            else{
                setSelected([...selected, day]);
            }
          }}
        >
          <Text fontSize={"md"}>{day.label}</Text>
        </Box>
      ))}
    </Flex>
  );
}
export default function FormDay ({name}: {name : string}) {
    const [field,,helper] = useField(name);

    return <Days selected={field.value} setSelected={helper.setValue} />;
}