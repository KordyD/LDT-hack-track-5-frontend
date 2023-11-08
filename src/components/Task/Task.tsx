import { Button, Flex, Image, Text } from '@mantine/core';
import classes from '../Mission/MissionAccordion/MissionAccordion.module.css';
import { Link } from 'react-router-dom';
import Trash from '../../assets/images/TrashBin.png';
import { useState } from 'react';

export const Task = ({ task, isEditing }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  if (isEditing) {
    return (
      <>
        <Flex
          justify={'space-between'}
          align={'center'}
          key={task.id}
          className={`${classes.missionAccordion__EditingTaskRoot} ${
            isDeleted ? classes.missionAccordion__EditingTaskRoot_delete : ''
          }`}
        >
          <Text
            truncate='end'
            maw='60%'
            pl='10px'
            fz='LargeText'
            className={classes.missionAccordion__EditingTask}
          >
            {task.title}
          </Text>
          <Text
            className={classes.missionAccordion__EditingTask}
            component={Link}
            to={`/mission/${task.id}`}
          >
            Изменить
          </Text>
          <Button
            w='10%'
            p='0'
            onClick={() => setIsDeleted(true)}
            bg='transparent'
            rightSection={<Image src={Trash} w='40px' h='40px' />}
          ></Button>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <Flex
          justify={'space-between'}
          align={'center'}
          key={task.id}
          className={classes.missionAccordion__EditingTaskRoot}
        >
          <Text
            truncate='end'
            w='60%'
            pl='10px'
            className={classes.missionAccordion__EditingTask}
          >
            {task.title}
          </Text>
        </Flex>
      </>
    );
  }
};
