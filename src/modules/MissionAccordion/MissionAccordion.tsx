import {
  Group,
  Text,
  Accordion,
  Flex,
  Progress,
  Button,
  Image,
} from '@mantine/core';
import classes from './MissionAccordion.module.css';
import Check from '../../assets/icon/check-circle.svg';
import Lock from '../../assets/icon/mbrilock_99595 1.svg';
import Arrow from '../../assets/icon/Arrow.svg';
import { useState } from 'react';
import { PopupMission } from '../PopupMission/PopupMission';

const charactersList = [
  {
    id: '1',
    week: '1',
    task: '9',
    test: '1',
    label: 'Знакомство',
    status: 'open',
    content: {
      value: 100,
      task: [
        {
          id: '1',
          title:
            'Задача 1Задача 1Задача 1Задача1Задача1Задача1Задача1Задача1Задача1ЗадачаЗадача1Задача1Задача1Задача1',
          status: 'Принято',
          time: '03.04.2023',
        },
        {
          id: '2',
          title: 'Задача 2',
          status: 'Принято',
          time: '03.04.2023',
        },
      ],
    },
  },

  {
    id: '2',
    week: '2',
    task: '9',
    test: '1',
    label: 'Погружение',
    status: 'open',
    content: {
      value: 50,
      task: [
        {
          id: '1',
          title: 'Задача 1',
          status: 'Принято',
          time: '03.04.2023',
        },
        {
          id: '2',
          title: 'Задача 2',
          status: 'Принято',
          time: '03.04.2023',
        },
      ],
    },
  },

  {
    id: '3',
    week: '3',
    task: '9',
    test: '1',
    label: 'Закрыто',
    status: 'close',
    content: {
      value: 0,
      task: [
        {
          id: '1',
          title: 'Задача 1',
          status: 'Принято',
          time: '03.04.2023',
        },
        {
          id: '2',
          title: 'Задача 2',
          status: 'На проверке',
          time: '03.04.2023',
        },
      ],
    },
  },
];

interface taskProps {
  id: string;
  title: string;
}

interface ContentProps {
  value: number;
  task: taskProps[];
}

export interface AccordionLabelProps {
  id: string;
  week: string;
  label: string;
  task: string;
  test: string;
  content: ContentProps;
}

const AccordionLabel = ({ label, week, task, test }: AccordionLabelProps) => {
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

export const MissionAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemId, setItemId] = useState('');
  const [taskId, setTaskId] = useState('');
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        {item.status === 'open' ? (
          <Flex direction='column'>
            <Progress
              color='#EEFF87'
              radius='xs'
              size='sm'
              mb='16px'
              value={item.content.value}
            />
            <Text className={classes.missionAccordion__progress}>
              Прогресс {item.content.value} %
            </Text>
            <Flex direction='column' gap='30px'>
              {item.content.task.map((task) => (
                <Button
                  key={task.id}
                  classNames={{
                    root: classes.missionAccordion__taskRoot,
                    inner: classes.missionAccordion__task,
                    label: classes.missionAccordion__labelButton,
                  }}
                  onClick={() => {
                    setItemId(item.id);
                    setTaskId(task.id);
                    setIsOpen(true);
                  }}
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
              ))}
            </Flex>
            <Button
              classNames={{
                root: classes.buttonTest,
                inner: classes.buttonTestInner,
              }}
              h='90px'
            >
              Пройти тест еще раз
            </Button>
          </Flex>
        ) : (
          <Image src={Lock} w='160px' h='160px' m='50px auto' />
        )}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      <Accordion
        variant='contained'
        chevronPosition='right'
        chevron={<Image src={Arrow} w='30px' />}
        w='100%'
        classNames={{
          root: classes.missionAccordion,
          item: classes.missionAccordion__item,
          label: classes.missionAccordion__label,
          panel: classes.missionAccordion__panel,
          control: classes.missionAccordion__control,
          chevron: classes.missionAccordion__chevron,
        }}
      >
        {items}
      </Accordion>
      {itemId !== '' ? (
        <PopupMission
          itemId={itemId}
          taskId={taskId}
          list={charactersList}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      ) : (
        ''
      )}
    </>
  );
};
