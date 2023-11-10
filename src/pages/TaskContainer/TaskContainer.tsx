import { Button, Flex, Image, ScrollArea } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import sort from '../../assets/icon/sort.svg';
import filter from '../../assets/icon/filter.svg';
import { Task } from '../../components/Task/Task.tsx';
import { ButtonsEditing } from '../../components/ButtonsEditing/ButtonsEditing.tsx';
import plus from '../../assets/icon/add_circle_create_expand_new_plus_icon_123218 1.png';
import { AddNewTask } from '../../components/Task/AddNewTask.tsx';
import { TextMiddle } from '../../theme/AdaptiveConts.ts';
import { task } from '../../API/hr/interfaces.ts';
import { getAllTasks } from '../../API/admin';
import { RootState } from '../../store';

export const TaskContainer = () => {
  const [tasks, setTask] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [isEditing, setIsEditing] = useState(false);
  const post = useSelector((state: RootState) => state.postName);
  useEffect(() => {
    Promise.all([getAllTasks()])
      .then(([res]) => {
        setTask(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Flex w='100%' direction='column' align={'flex-start'}>
        <Flex w='100%' justify='space-between'>
          <Button
            fz={TextMiddle}
            p='0'
            variant='white'
            color='#5277F6'
            rightSection={<Image src={sort} />}
          >
            Сортировка
          </Button>
          <Button
            fz={TextMiddle}
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
            fz={TextMiddle}
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
          {tasks.map((task: task) => (
            <Task task={task} key={task.taskId} isEditing={isEditing} />
          ))}
        </ScrollArea.Autosize>
        <ButtonsEditing isEditing={isEditing} setIsEditing={setIsEditing} />
      </Flex>
      <AddNewTask opened={opened} name={'Создать задание'} close={close} />
    </>
  );
};
