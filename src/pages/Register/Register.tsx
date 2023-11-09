import { Button, Flex, Image, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Women from '../../assets/images/image-PhotoRoom.png-PhotoRoom - 2023-09-28T181802 1.png';
import classes from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  EditButton,
  HeadingH3,
  TextForInput,
  TextLarge,
  TextMiddle,
} from '../../theme/AdaptiveConts.ts';

interface IRegister {
  email: string;
  password: string;
  againPassword: string;
}
export const Register = () => {
  const navigate = useNavigate();

  const form = useForm<IRegister>({
    initialValues: {
      email: '',
      password: '',
      againPassword: '',
    },

    validate: {
      email: (value) =>
        /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i.test(value)
          ? null
          : 'Некорректный адрес электронной почты',
      password: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        )
          ? null
          : 'Пароль должен содержать не менее 8 символов и хотя бы одну строчную и одну заглавную букву, одну цифру, один из спец. символов: @, $, !, %, *, ?, &',
      againPassword: (value) =>
        value === form.values.password ? null : 'Пароли не совпадают',
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
        onSubmit={form.onSubmit((values: IRegister) => {
          console.log(values);
          navigate('/login', { replace: true });
        })}
      >
        <Text className={classes.register__title} fz={HeadingH3}>
          Регистрация
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
        <TextInput
          variant='filled'
          w='100%'
          classNames={{
            root: classes.register__inputRoot,
            input: classes.register__input,
          }}
          placeholder='Повторите пароль'
          {...form.getInputProps('againPassword')}
        />
        <Button
          type='submit'
          className={classes.register__button}
          fz={TextMiddle}
        >
          Далее
        </Button>
        <Button fz={TextMiddle} variant={'white'} component={Link} to='/login'>
          Есть аккаунт? Войти
        </Button>
      </form>
      <Image
        src={Women}
        w={{ lg: '740px', md: '640px', sm: '500px', base: '380px' }}
      />
    </Flex>
  );
};
