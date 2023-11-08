import { AddTask } from '../Mission/MissionAccordion/AddTask/AddTask.tsx';
import { Button } from '@mantine/core';
import classes from '../Mission/MissionAccordion/MissionAccordion.module.css';

export const ButtonsEditing = ({ isEditing, setIsEditing }) => {
  return (
    <>
      {isEditing ? (
        <Button
          onClick={() => setIsEditing(false)}
          h='90px'
          bg='#5277F6'
          color='#FFF'
          classNames={{
            root: classes.buttonTest,
            inner: classes.buttonEditorInner,
          }}
        >
          Сохранить
        </Button>
      ) : (
        <Button
          onClick={() => setIsEditing(true)}
          h='90px'
          classNames={{
            root: classes.buttonTest,
            inner: classes.buttonTestInner,
          }}
        >
          Редактировать
        </Button>
      )}
    </>
  );
};
