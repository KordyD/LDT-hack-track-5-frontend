import {
  Button,
  Flex,
  Modal,
  NativeSelect,
  NumberInput,
  Textarea,
  TextInput,
} from '@mantine/core';
import classes from '../Mission/MissionAccordion/MissionAccordion.module.css';
import { useForm } from '@mantine/form';

export const AddNewTask = ({ close, opened, name }) => {
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      sum: '',
      job: '',
    },

    validate: {
      name: (value) =>
        /.+/.test(value)
          ? null
          : 'Название должно состоять хотя бы из 1 символа',
    },
  });
  const closePopup = () => {
    close();
    form.reset();
  };
  return (
    <Modal
      radius='32px'
      classNames={{
        title: classes.newstage__title,
        content: classes.newstage,
      }}
      opened={opened}
      onClose={() => {
        closePopup();
      }}
      centered
      title={name}
      overlayProps={{
        backgroundOpacity: 0.6,
        blur: 3,
      }}
    >
      <form
        className={classes.newstage__form}
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          closePopup();
        })}
      >
        <Flex gap={'xs'}>
          <TextInput
            w='50%'
            classNames={{ input: classes.newstage__input }}
            placeholder='Название'
            {...form.getInputProps('name')}
          />
          <NumberInput
            w='50%'
            radius='xl'
            classNames={{ input: classes.newstage__input }}
            placeholder='Сумма'
            prefix='Сумма: '
            min={1}
            {...form.getInputProps('sum')}
          />
        </Flex>
        <Textarea
          radius='xl'
          w='100%'
          classNames={{
            input: classes.newstage__inputXL,
          }}
          placeholder='Описание'
          {...form.getInputProps('description')}
        />
        <NativeSelect
          radius='xl'
          w='100%'
          classNames={{
            input: classes.newstage__input,
          }}
          placeholder='Должность'
          data={['React', 'Angular', 'Vue']}
          {...form.getInputProps('job')}
        />
        <Button
          w='55%'
          type='submit'
          classNames={{ root: classes.newstage__button }}
        >
          Создать этап
        </Button>
      </form>
    </Modal>
  );
};

export default AddNewTask;
