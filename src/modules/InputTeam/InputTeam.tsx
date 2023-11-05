import { Box, Button, TextInput } from '@mantine/core';
import classes from './InputTeam.module.css';

export const InputTeam = () => {
  return (
    <>
      <Box className={classes.wrapperInputs}>
        <TextInput
          placeholder='Имя'
          classNames={{ root: classes.inputRoot, input: classes.input }}
        />
        <TextInput
          placeholder='Город'
          classNames={{ root: classes.inputRoot, input: classes.input }}
        />
        <TextInput
          placeholder='Должность'
          classNames={{ root: classes.inputRoot, input: classes.input }}
        />
        <TextInput
          placeholder='Отдел'
          classNames={{ root: classes.inputRoot, input: classes.input }}
        />
      </Box>
      <Box className={classes.wrapperButtons}>
        <Button className={classes.button}>Найти</Button>
        <Button className={classes.button} variant='light'>
          Очистить
        </Button>
      </Box>
    </>
  );
};
