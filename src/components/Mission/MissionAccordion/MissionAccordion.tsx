import { Accordion, Image } from '@mantine/core';
import Arrow from '../../../assets/icon/Arrow.svg';
import { AddNewStage } from '../MissionAdmin/AddNewStage/AddNewStage.tsx';
import { allTaskAndStage } from '../../../API/hr/interfaces.ts';
import { AccordionItem } from './Accordion/AccordionItem.tsx';
import classes from './MissionAccordion.module.css';

export const charactersList = [
  {
    id: 1,
    week: '1',
    task: '9',
    test: '1',
    label: 'Знакомство',
    status: 'open',
    content: {
      value: 100,
      task: [
        {
          id: 1,
          title:
            'Задача 1Задача 1Задача 1Задача1Задача1 Задача1Задача1 Задача1Задача1ЗадачаЗадача1Задача1Задача1Задача1',
          status: 'Принято',
          time: '03.04.2023',
        },
        {
          id: 2,
          title: 'Задача 2',
          status: 'Принято',
          time: '03.04.2023',
        },
      ],
    },
  },

  {
    id: 2,
    week: '2',
    task: '9',
    test: '1',
    label: 'Погружение',
    status: 'open',
    content: {
      value: 50,
      task: [
        {
          id: 1,
          title: 'Задача 1',
          status: 'Принято',
          time: '03.04.2023',
        },
        {
          id: 2,
          title: 'Задача 2',
          status: 'Принято',
          time: '03.04.2023',
        },
      ],
    },
  },

  {
    id: 3,
    week: '3',
    task: '9',
    test: '1',
    label: 'Закрыто',
    status: 'close',
    content: {
      value: 0,
      task: [
        {
          id: 1,
          title: 'Задача 1',
          status: 'Принято',
          time: '03.04.2023',
        },
        {
          id: 2,
          title: 'Задача 2',
          status: 'На проверке',
          time: '03.04.2023',
        },
      ],
    },
  },
];

interface taskProps {
  id: number;
  title: string;
}

interface ContentProps {
  value: number;
  task: taskProps[];
}

export interface AccordionLabelProps {
  stage: allTaskAndStage[];
}

const role = 'ADMIN';

export const MissionAccordion = ({ stage }: AccordionLabelProps) => {
  const items = charactersList.map((item) => (
    <AccordionItem item={item} key={item.label} role={role} />
  ));

  if (role === 'ADMIN') {
    return (
      <>
        <Accordion
          variant='contained'
          chevronPosition='right'
          chevron={
            <Image src={Arrow} w={{ lg: '30px', md: '30px', base: '25px' }} />
          }
          w='100%'
          classNames={{
            root: classes.missionAccordion,
            item: classes.missionAccordion__admin,
            label: classes.missionAccordion__label,
            panel: classes.missionAccordion__panel,
            control: classes.missionAccordion__control,
            chevron: classes.missionAccordion__chevron,
          }}
        >
          {items}
          <AddNewStage />
        </Accordion>
      </>
    );
  } else if (role === 'USER') {
    return (
      <>
        <Accordion
          variant='contained'
          chevronPosition='right'
          chevron={
            <Image
              src={Arrow}
              w={{ lg: '30px', md: '30px', sm: '25px', xs: '20px' }}
            />
          }
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
      </>
    );
  }
};
