import { Box, Button, TextInput } from '@mantine/core';
import classes from './InputTeam.module.css';

export const InputTeam = () => {
  return (
    <Box mb='xl'>
      <Box className={classes.wrapperInputs}>
        <TextInput radius='xl' w='100%' placeholder='Имя' />
        <TextInput radius='xl' w='100%' placeholder='Город' />
        <TextInput radius='xl' w='100%' placeholder='Должность' />
        <TextInput radius='xl' w='100%' placeholder='Отдел' />
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
