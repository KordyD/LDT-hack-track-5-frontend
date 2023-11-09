import { Button, Flex, Text, TextInput } from '@mantine/core';
import classes from '../Register/Register.module.css';
import { useForm } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { HeadingH3, TextMiddle } from '../../theme/AdaptiveConts.ts';

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
    <Flex
      className={classes.register}
      h='100vh'
      maw={{ lg: '550px', md: '450px', xs: '400px', base: '350px' }}
    >
      <form
        className={classes.register__form}
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          navigate('/', { replace: true });
        })}
      >
        <Text className={classes.register__title} fz={HeadingH3}>
          Войти
        </Text>
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
        <Button
          fz={TextMiddle}
          variant={'white'}
          component={Link}
          to='/register'
        >
          Зарегистрироваться
        </Button>
      </form>
    </Flex>
  );
};
