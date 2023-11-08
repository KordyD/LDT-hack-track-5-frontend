import { Box, TextInput } from '@mantine/core';
import classes from './InputTeam.module.css';

export const InputTeam = () => {
  return (
    <>
      <Box className={classes.wrapperInputs}>
        <TextInput placeholder='Имя' variant='primary' />
        <TextInput placeholder='Город' variant='primary' />
        <TextInput placeholder='Должность' variant='primary' />
        <TextInput placeholder='Отдел' variant='primary' />
      </Box>
      {/* <Box className={classes.wrapperButtons}>
        <Button className={classes.button}>Найти</Button>
        <Button className={classes.button} variant='light'>
          Очистить
        </Button>
      </Box> */}
    </>
  );
};
