import {
  Autocomplete,
  Box,
  Button,
  Modal,
  Stack,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import classes from './AddEmployee.module.css';
// import {
//   getCities,
//   getDepartments,
//   getJobs,
//   getRoles,
// } from '../../API/Employees';

export const AddEmployee = () => {
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [cities, setCities] = useState([]);

  // useEffect(() => {
  //   getRoles().then((roles) => setRoles(roles));
  //   getDepartments().then((departments) => setDepartments(departments));
  //   getJobs().then((jobs) => setJobs(jobs));
  //   getCities().then((cities) => setCities(cities));
  // }, []);

  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      role: '',
      department: '',
      job: '',
      city: '',
    },
  });
  return (
    <>
      <Button onClick={open}>Добавить сотрудника</Button>
      <Modal opened={opened} onClose={close} title='Добавить сотрудника'>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack>
            <TextInput
              variant='primary'
              placeholder='Имя'
              {...form.getInputProps('name')}
            />
            <TextInput
              variant='primary'
              placeholder='Почта'
              {...form.getInputProps('email')}
            />
            <Autocomplete
              variant='primary'
              placeholder='Выбрать роль'
              {...form.getInputProps('role')}
              data={roles}
            />
            <Autocomplete
              variant='primary'
              placeholder='Отдел'
              {...form.getInputProps('department')}
              data={departments}
            />
            <Autocomplete
              variant='primary'
              placeholder='Должность'
              {...form.getInputProps('job')}
              data={jobs}
            />
            <Autocomplete
              variant='primary'
              placeholder='Город'
              {...form.getInputProps('city')}
              data={cities}
            />
            <Button type='submit'>Сохранить</Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
