import { Button, Flex, Image, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Women from '../../assets/images/image-PhotoRoom.png-PhotoRoom - 2023-09-28T181802 1.png';
import classes from './Register.module.css';
import { useNavigate } from 'react-router-dom';

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
    <Flex className={classes.register} mt='210px'>
      <form
        className={classes.register__form}
        onSubmit={form.onSubmit((values: IRegister) => {
          console.log(values);
          navigate('/login', { replace: true });
        })}
      >
        <Text className={classes.register__title}>Регистрация</Text>
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
          classNames={{
            root: classes.register__inputRoot,
            input: classes.register__input,
          }}
          placeholder='Повторите пароль'
          {...form.getInputProps('againPassword')}
        />
        <Button type='submit' className={classes.register__button}>
          Далее
        </Button>
      </form>
      <Image src={Women} w='740px' h='663px' mt='87px' />
    </Flex>
  );
};
