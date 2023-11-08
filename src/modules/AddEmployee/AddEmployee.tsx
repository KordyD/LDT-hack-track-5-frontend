import { Autocomplete, Box, Button, Modal, TextInput } from '@mantine/core';
import classes from './AddEmployee.module.css';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
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
          <TextInput placeholder='Имя' {...form.getInputProps('name')} />
          <TextInput placeholder='Почта' {...form.getInputProps('email')} />
          <Autocomplete
            placeholder='Выбрать роль'
            {...form.getInputProps('role')}
            data={roles}
          />
          <Autocomplete
            placeholder='Отдел'
            {...form.getInputProps('department')}
            data={departments}
          />
          <Autocomplete
            placeholder='Должность'
            {...form.getInputProps('job')}
            data={jobs}
          />
          <Autocomplete
            placeholder='Город'
            {...form.getInputProps('city')}
            data={cities}
          />
          <Button type='submit'>Сохранить</Button>
        </form>
      </Modal>
    </>
  );
};
