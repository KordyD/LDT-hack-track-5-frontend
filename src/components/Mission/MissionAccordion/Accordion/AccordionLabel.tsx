import { Flex, Group, Text } from '@mantine/core';
import classes from '../MissionAccordion.module.css';
import { AccordionLabelProps } from '../MissionAccordion.tsx';
import {
  Direction,
  Heading,
  TextForInput,
} from '../../../../theme/AdaptiveConts.ts';

export const AccordionLabel = ({
  label,
  week,
  task,
  test,
}: AccordionLabelProps) => {
  return (
    <Group>
      <Flex direction='column' align='center'>
        <Text className={classes.missionAccordion__title} fz={Heading}>
          {label}
        </Text>
        <Flex gap='20px' direction={Direction}>
          <Text
            fz={TextForInput}
            bg='#5277F6'
            color='#FFF'
            className={classes.missionAccordion__text}
          >
            {week} неделя
          </Text>
          <Text
            fz={TextForInput}
            bg='#F8F8F8'
            color='#5277F6'
            className={classes.missionAccordion__text}
          >
            {task} заданий
          </Text>
          <Text
            fz={TextForInput}
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
