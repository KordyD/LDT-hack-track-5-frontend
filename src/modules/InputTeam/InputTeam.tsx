import { Box, Button, Group, TextInput } from '@mantine/core';
import classes from './InputTeam.module.css';

export const InputTeam = () => {
  return (
    <>
      <Group className={classes.wrapperInputs}>
        <Box className={classes.wrapperInput}>
          <TextInput placeholder='Имя' variant='primary' />
        </Box>
        <Box className={classes.wrapperInput}>
          <TextInput placeholder='Город' variant='primary' />
        </Box>
        <Box className={classes.wrapperInput}>
          <TextInput placeholder='Должность' variant='primary' />
        </Box>
        <Box className={classes.wrapperInput}>
          <TextInput placeholder='Отдел' variant='primary' />
        </Box>
      </Group>
      <Group className={classes.wrapperButtons}>
        <Button className={classes.button}>Найти</Button>
        <Button className={classes.button} variant='light'>
          Очистить
        </Button>
      </Group>
    </>
  );
};
