import { Flex, Group, Text } from '@mantine/core';
import classes from './MissionAccordion.module.css';
import { AccordionLabelProps } from './MissionAccordion.tsx';

export const AccordionLabel = ({
  label,
  week,
  task,
  test,
}: AccordionLabelProps) => {
  return (
    <Group wrap='nowrap'>
      <Flex direction='column' align='center'>
        <Text className={classes.missionAccordion__title}>{label}</Text>
        <Flex gap='20px'>
          <Text
            w='220px'
            bg='#5277F6'
            color='#FFF'
            className={classes.missionAccordion__text}
          >
            {week} неделя
          </Text>
          <Text
            w='170px'
            bg='#F8F8F8'
            color='#5277F6'
            className={classes.missionAccordion__text}
          >
            {task} заданий
          </Text>
          <Text
            w='170px'
            bg='#F8F8F8'
            color='#5277F6'
            className={classes.missionAccordion__text}
          >
            {test} тест
          </Text>
        </Flex>
      </Flex>
    </Group>
  );
};
