import { Button, Flex, Image, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from '../Mission/MissionAccordion/MissionAccordion.module.css';
import Trash from '../../assets/images/TrashBin.png';
import { useState } from 'react';
import { Image40, TextMiddle } from '../../theme/AdaptiveConts.ts';

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
            fz={TextMiddle}
            className={classes.missionAccordion__EditingTask}
          >
            {task.title}
          </Text>
          <Text
            fz={TextMiddle}
            className={classes.missionAccordion__EditingTask}
            component={Link}
            to={`/mission/${task.id}`}
          >
            Изменить
          </Text>
          <Button
            p='0'
            onClick={() => setIsDeleted(true)}
            bg='transparent'
            rightSection={<Image src={Trash} w={Image40} h={Image40} />}
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
            fz={TextMiddle}
            className={classes.missionAccordion__EditingTask}
          >
            {task.title}
          </Text>
        </Flex>
      </>
    );
  }
};