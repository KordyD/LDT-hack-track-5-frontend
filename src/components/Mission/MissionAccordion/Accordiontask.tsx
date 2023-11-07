import classes from './MissionAccordion.module.css';
import { Link } from 'react-router-dom';
import { Button, Flex, Image, Text } from '@mantine/core';
import Check from '../../../assets/icon/check-circle.svg';

export const Accordiontask = ({ task }) => {
  return (
    <Button
      key={task.id}
      classNames={{
        root: classes.missionAccordion__taskRoot,
        inner: classes.missionAccordion__task,
        label: classes.missionAccordion__labelButton,
      }}
      component={Link}
      to={`/mission/${task.id}`}
      rightSection={
        <Flex align='center' gap='10px'>
          <Text
            className={`${
              task.status === 'Принято'
                ? classes.missionAccordion__statusAp
                : classes.missionAccordion__statusDn
            }  `}
          >
            {task.status} {task.time}
          </Text>
          {task.status === 'Принято' ? (
            <Image src={Check} w='40px' h='60px' />
          ) : (
            ''
          )}
        </Flex>
      }
    >
      {task.title}
    </Button>
  );
};
