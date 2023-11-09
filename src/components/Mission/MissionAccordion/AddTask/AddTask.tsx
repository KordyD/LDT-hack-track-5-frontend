import { Button, Image, Modal, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import plus from '../../../../assets/icon/add_circle_create_expand_new_plus_icon_123218 1.png';
import classes from '../../MissionAccordion/MissionAccordion.module.css';
import {
  EditButton,
  Image40,
  TextForInput,
  TextMiddle,
} from '../../../../theme/AdaptiveConts.ts';

export const AddTask = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      task: '',
    },
  });

  const closePopup = () => {
    close();
    form.reset();
  };
  return (
    <>
      <Button
        align='center'
        justify='center'
        bg='transparent'
        w='100%'
        h={EditButton}
        className={classes.addTask}
        onClick={open}
      >
        <Button
          classNames={{
            root: classes.addTaskButton,
            label: classes.addTaskLabel,
          }}
          fz={TextMiddle}
          rightSection={<Image src={plus} w={Image40} h={Image40} />}
        >
          Добавить задание
        </Button>
      </Button>
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
        title='Добавить задание'
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
          <Select
            withCheckIcon={false}
            w='100%'
            placeholder='Выберете задачу'
            fz={TextForInput}
            classNames={{ input: classes.newstage__input }}
            data={['', 'React', 'Angular', 'Vue', 'Svelte']}
            {...form.getInputProps('task')}
          />
          <Button
            w='55%'
            type='submit'
            fz={TextForInput}
            classNames={{ root: classes.newstage__button }}
          >
            Добавить задание
          </Button>
        </form>
      </Modal>
    </>
  );
};
