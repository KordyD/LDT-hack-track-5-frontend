import { Button, Flex, Image, Modal, TextInput } from '@mantine/core';
import classes from '../../MissionAccordion/MissionAccordion.module.css';
import plus from '../../../../assets/icon/add_circle_create_expand_new_plus_icon_123218 1.png';
import { useDisclosure } from '@mantine/hooks';
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

export const AddNewStage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      date: '',
      name: '',
    },

    validate: {
      date: (value) => (/.+/.test(value) ? null : 'Нужно выбрать дату'),
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
    <>
      <Flex
        align='center'
        justify='center'
        w='100%'
        h='200px'
        className={classes.missionAccordion__admin}
      >
        <Button
          onClick={open}
          justify='space-around'
          className={classes.buttonAddStage}
          rightSection={<Image src={plus} w='40px' h='40px' />}
        >
          Добавить этап
        </Button>
      </Flex>
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
        title='Добавить этап'
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
          <DateInput
            w='100%'
            classNames={{ input: classes.newstage__input }}
            placeholder='Сроки выполнения до:'
            valueFormat='Сроки выполнения до: DD.MM.YYYY'
            {...form.getInputProps('date')}
          />
          <TextInput
            w='100%'
            classNames={{ input: classes.newstage__input }}
            placeholder='Название'
            {...form.getInputProps('name')}
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
    </>
  );
};
