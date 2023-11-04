import { Box, Button, TextInput } from '@mantine/core';
import classes from './InputTeam.module.css';

export const InputTeam = () => {
  return (
    <Box mb='xl'>
      <Box className={classes.wrapperInputs}>
        <TextInput
          classNames={{ input: classes.input, root: classes.root }}
          placeholder='Имя'
        />
        <TextInput
          classNames={{ input: classes.input, root: classes.root }}
          placeholder='Город'
        />
        <TextInput
          classNames={{ input: classes.input, root: classes.root }}
          placeholder='Должность'
        />
        <TextInput
          classNames={{ input: classes.input, root: classes.root }}
          placeholder='Отдел'
        />
      </Box>
      <Box className={classes.wrapperButtons}>
        <Button radius='xl' px='45px' color='indigo'>
          Найти
        </Button>
        <Button radius='xl' px='45px' color='indigo' variant='light'>
          Очистить
        </Button>
      </Box>
    </Box>
  );
};
