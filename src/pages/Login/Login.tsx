import { Button, Flex, Text, TextInput } from '@mantine/core';
import classes from '../Register/Register.module.css';
import { NavLink } from 'react-router-dom';
import { useForm, UseFormReturnType } from '@mantine/form';

export const Login = () => {
  let form: UseFormReturnType<
    { password: string; email: string },
    (values: { password: string; email: string }) => {
      password: string;
      email: string;
    }
  >;
  form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Flex className={classes.register} mt='210px'>
      <form
        className={classes.register__form}
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <Text className={classes.register__title}>Войти</Text>
        <TextInput
          variant='filled'
          classNames={{
            root: classes.register__inputRoot,
            input: classes.register__input,
          }}
          placeholder='Логин'
          {...form.getInputProps('email')}
        />
        <TextInput
          variant='filled'
          classNames={{
            root: classes.register__inputRoot,
            input: classes.register__input,
          }}
          placeholder='Пароль'
          {...form.getInputProps('password')}
        />
        <Button
          type='submit'
          className={classes.register__button}
          component={NavLink}
          to='/login'
        >
          Войти
        </Button>
      </form>
    </Flex>
  );
};
