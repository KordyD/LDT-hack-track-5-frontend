import { Button, Image, Modal, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import plus from '../../../../assets/icon/add_circle_create_expand_new_plus_icon_123218 1.png';
import classes from '../../MissionAccordion/MissionAccordion.module.css';

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
        h='90px'
        className={classes.addTask}
        onClick={open}
      >
        <Button
          classNames={{
            root: classes.addTaskButton,
            label: classes.addTaskLabel,
          }}
          rightSection={<Image src={plus} w='40px' h='40px' />}
        >
          Добавить задание
        </Button>
      </Button>
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
            classNames={{ input: classes.newstage__input }}
            data={['', 'React', 'Angular', 'Vue', 'Svelte']}
            {...form.getInputProps('task')}
          />
          <Button
            w='55%'
            type='submit'
            classNames={{ root: classes.newstage__button }}
          >
            Добавить задание
          </Button>
        </form>
      </Modal>
    </>
  );
};
