import {
  Button,
  Flex,
  Modal,
  NativeSelect,
  NumberInput,
  TagsInput,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from '../Mission/MissionAccordion/MissionAccordion.module.css';
import { TextForInput } from '../../theme/AdaptiveConts.ts';
import { RootState } from '../../store';

interface INewTask {
  opened: boolean;
  name: string;
  close: () => void;
}

export const AddNewTask = ({ close, opened, name }: INewTask) => {
  const post = useSelector((state: RootState) => state.postName);
  const [imagesValue, setImagesValue] = useState([]);
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      levelDifficulty: '',
      postName: '',
      imagePath: imagesValue,
      rate: '',
    },

    validate: {
      name: (value) =>
        /.+/.test(value)
          ? null
          : 'Название должно состоять хотя бы из 1 символа',
    },
  });

  const addNewTaskFunc = () => {};

  const updateTaskFunc = () => {};
  const closePopup = () => {
    close();
    setImagesValue([]);
    form.reset();
  };
  return (
    <Modal
      radius='32px'
      fz={TextForInput}
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
            fz={TextForInput}
            w='50%'
            classNames={{ input: classes.newstage__input }}
            placeholder='Название'
            {...form.getInputProps('name')}
          />
          <NumberInput
            fz={TextForInput}
            w='50%'
            radius='xl'
            classNames={{ input: classes.newstage__input }}
            placeholder='Сумма'
            prefix='Сумма: '
            min={1}
            {...form.getInputProps('rate')}
          />
        </Flex>
        <Textarea
          fz={TextForInput}
          radius='xl'
          w='100%'
          classNames={{
            input: classes.newstage__inputXL,
          }}
          placeholder='Описание'
          {...form.getInputProps('description')}
        />
        <Flex gap='15px'>
          <NativeSelect
            fz={TextForInput}
            radius='xl'
            w='50%'
            classNames={{
              input: classes.newstage__input,
            }}
            placeholder='Должность'
            data={post}
            {...form.getInputProps('postName')}
          />
          <NumberInput
            fz={TextForInput}
            w='50%'
            radius='xl'
            classNames={{ input: classes.newstage__input }}
            placeholder='Сложность'
            min={1}
            {...form.getInputProps('levelDifficulty')}
          />
        </Flex>
        <TagsInput
          placeholder='Введите ссылку на файл'
          onChange={setImagesValue}
        />

        <Button
          fz={TextForInput}
          w='55%'
          type='submit'
          classNames={{ root: classes.newstage__button }}
        >
          {name}
        </Button>
      </form>
    </Modal>
  );
};
