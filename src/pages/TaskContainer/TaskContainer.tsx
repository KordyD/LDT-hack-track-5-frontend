import { Button, Flex, Image, ScrollArea } from '@mantine/core';
import sort from '../../assets/icon/sort.svg';
import filter from '../../assets/icon/filter.svg';
import { Task } from '../../components/Task/Task.tsx';
import { AccordionItem } from '../../components/Mission/MissionAccordion/Accordion/AccordionItem.tsx';
import { useState } from 'react';

const task = [
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
];
export const TaskContainer = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Flex w='100%' direction='column'>
      <Flex w='100%' justify='space-between'>
        <Button
          w='200px'
          variant='white'
          color='#5277F6'
          rightSection={<Image src={sort} />}
        >
          Сортировка
        </Button>
        <Button
          w='200px'
          variant='white'
          color='#5277F6'
          rightSection={<Image src={filter} />}
        >
          Фильтр
        </Button>
      </Flex>
      <ScrollArea.Autosize mah={300} w='100%' mx='auto'>
        {task.map((item) => (
          <Task task={item} key={item.id} isEditing={isEditing} />
        ))}
      </ScrollArea.Autosize>
      <Button>Редактировать</Button>
    </Flex>
  );
};
