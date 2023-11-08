import {
  Button,
  Flex,
  Image,
  ScrollArea,
  Modal,
  TextInput,
} from '@mantine/core';
import sort from '../../assets/icon/sort.svg';
import filter from '../../assets/icon/filter.svg';
import { Task } from '../../components/Task/Task.tsx';
import { useState } from 'react';
import { ButtonsEditing } from '../../components/ButtonsEditing/ButtonsEditing.tsx';
import classes from '../../components/Mission/MissionAccordion/MissionAccordion.module.css';
import plus from '../../assets/icon/add_circle_create_expand_new_plus_icon_123218 1.png';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { AddTask } from '../../components/Mission/MissionAccordion/AddTask/AddTask.tsx';
import AddNewTask from '../../components/Task/AddNewTask.tsx';

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
  const [opened, { open, close }] = useDisclosure(false);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <>
      <Flex w='100%' direction='column' align={'flex-start'}>
        <Flex w='100%' justify='space-between'>
          <Button
            p='0'
            variant='white'
            color='#5277F6'
            rightSection={<Image src={sort} />}
          >
            Сортировка
          </Button>
          <Button
            p='0'
            variant='white'
            color='#5277F6'
            rightSection={<Image src={filter} />}
          >
            Фильтр
          </Button>
        </Flex>
        {isEditing ? (
          <Button
            variant='white'
            mt='20px'
            p='0'
            color='#5277F6'
            onClick={open}
            rightSection={<Image src={plus} w='30px' h='30px' />}
          >
            Создать задание
          </Button>
        ) : (
          ''
        )}
        <ScrollArea.Autosize mah={300} w='100%' mx='auto'>
          {task.map((item) => (
            <Task task={item} key={item.id} isEditing={isEditing} />
          ))}
        </ScrollArea.Autosize>
        <ButtonsEditing isEditing={isEditing} setIsEditing={setIsEditing} />
      </Flex>
      <AddNewTask opened={opened} name={'Создать задание'} close={close} />
    </>
  );
};
