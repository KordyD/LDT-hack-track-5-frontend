import { Link } from 'react-router-dom';
import { Button, Flex, Image, Text } from '@mantine/core';
import classes from '../MissionAccordion.module.css';
import Check from '../../../../assets/icon/check-circle.svg';
import Trash from '../../../../assets/images/TrashBin.png';

export const Accordiontask = ({ task, isEditing }) => {
  if (isEditing) {
    return (
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
        <Text
          className={classes.missionAccordion__EditingTask}
          component={Link}
          to={`/mission/${task.id}`}
        >
          Изменить
        </Text>
        <Button
          mr='10px'
          p='0'
          bg='transparent'
          rightSection={<Image src={Trash} w='40px' h='40px' />}
        ></Button>
      </Flex>
    );
  }

  if (!isEditing) {
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
        <Text
          truncate='end'
          pl='10px'
          className={classes.missionAccordion__EditingTask}
        >
          {task.title}
        </Text>
      </Button>
    );
  }
};
