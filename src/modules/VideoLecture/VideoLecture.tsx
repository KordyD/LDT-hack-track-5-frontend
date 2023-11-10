import {
  TextInput,
  Group,
  Button,
  Flex,
  SimpleGrid,
  Card,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { Modal, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Simulate } from 'react-dom/test-utils';
import { LectureVideo } from '../../components/Lecture/LectureVideo';
import { BackButton } from '../../components/BackButton/BackButton.tsx';
import { TextForInput } from '../../theme/AdaptiveConts.ts';
import { addVideos } from '../../API/admin';
import classes from './VideoLecture.module.css';
import error = Simulate.error;

export interface VideoProps {
  id: number;
  src: string;
  title: string;
  description: string;
  department: string;
}

// const transformHTTP = (src) => {
//   const newHTTP = src.split('live').join('embed');
//   return newHTTP;
// };
//
// console.log(
//   transformHTTP('https://www.youtube.com/live/jfKfPfyJRdk?si=kJdDHKPBBEgw8fTm')
// );

const video = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/mwKJfNYwvm8?si=1jbHTgIA6CGLLeSm',
    title: 'beast1',
    description: 'Описание видео',
    department: 'IT отдел',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/mwKJfNYwvm8?si=1jbHTgIA6CGLLeSm',
    title: 'beast2',
    description: 'Описание видео',
    department: 'IT отдел',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/mwKJfNYwvm8?si=1jbHTgIA6CGLLeSm',
    title: 'beast3',
    description: 'Описание видео',
    department: 'IT отдел',
  },
  {
    id: 4,
    src: 'https://www.youtube.com/embed/XzADltUNTEc?si=_8cZz3vhdOeX5-B8',
    title: 'beast3beast3beast3beast3',
    description: 'Описание видео',
    department: 'IT отдел',
  },
];
const role = 'ADMIN';

export const VideoLecture = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const formVideo = useForm({
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

  const form = useForm({
    initialValues: {
      videoName: '',
    },
  });

  const handleSubmit = (data) => {
    addVideos(data)
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Flex direction='column' align='center' bg='#FFF' mt='30px'>
        <Flex w='100%' justify='space-between' align='flex-end'>
          <form
            onSubmit={form.onSubmit((values) => {
              handleSubmit(values);
              closePopup();
            })}
          >
            <TextInput
              w='100%'
              classNames={{ input: classes.videolecture__input }}
              placeholder='Введите ключевые слова'
              {...form.getInputProps('videoName')}
            />

            <Group justify='flex-start' mt='md'>
              <Button
                className={`${classes.videolecture__button} ${classes.videolecture__buttonSearch}`}
                type='submit'
              >
                Найти
              </Button>
              <Button className={classes.videolecture__button} type='button'>
                Очистить
              </Button>
            </Group>
          </form>
          <BackButton>Назад</BackButton>
        </Flex>
        {role === 'ADMIN' ? (
          <Flex w='100%' mt='20px'>
            <Button
              variant='white'
              color='#5277F6'
              rightSection={<AiOutlinePaperClip />}
              onClick={open}
            >
              Добавить видео
            </Button>
          </Flex>
        ) : (
          ''
        )}
        <SimpleGrid
          cols={{ lg: 3, md: 2, sm: 2, base: 1 }}
          justify='flex-start'
          align='flex-start'
          gutter='30px'
          m='10px 0 140px'
        >
          {video.map((item) => (
            <Card key={item.id}>
              <LectureVideo video={item} />
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
      <Modal
        radius='32px'
        fz={TextForInput}
        opened={opened}
        onClose={() => {
          closePopup();
        }}
        centered
        title='Добавить видео'
        overlayProps={{
          backgroundOpacity: 0.6,
          blur: 3,
        }}
      >
        <form
          className={classes.videolecture__form}
          onSubmit={formVideo.onSubmit((values) => {
            console.log(values);
            closePopup();
          })}
        >
          <TextInput
            w='100%'
            fz={TextForInput}
            classNames={{ input: classes.videolecture__input }}
            placeholder='Название'
            {...formVideo.getInputProps('name')}
          />
          <Textarea
            w='100%'
            fz={TextForInput}
            classNames={{ input: classes.videolecture__input }}
            placeholder='Описание'
            {...formVideo.getInputProps('description')}
          />
          <TextInput
            w='100%'
            fz={TextForInput}
            classNames={{ input: classes.videolecture__input }}
            placeholder='Ссылка'
            {...formVideo.getInputProps('url')}
          />
          <Select
            withCheckIcon={false}
            w='100%'
            placeholder='Должность'
            fz={TextForInput}
            classNames={{ input: classes.videolecture__input }}
            data={['', 'React', 'Angular', 'Vue', 'Svelte']}
            {...formVideo.getInputProps('postName')}
          />
          <Button w='55%' type='submit' fz={TextForInput}>
            Создать этап
          </Button>
        </form>
      </Modal>
    </>
  );
};
