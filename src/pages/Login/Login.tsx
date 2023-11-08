import { Button, Flex, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import classes from '../Register/Register.module.css';

interface ILogin {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();

  const form = useForm<ILogin>({
    initialValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Flex className={classes.register} mt='210px'>
      <form
        className={classes.register__form}
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          navigate('/', { replace: true });
        })}
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
        <Button type='submit' className={classes.register__button}>
          Войти
        </Button>
      </form>
    </Flex>
  );
};
