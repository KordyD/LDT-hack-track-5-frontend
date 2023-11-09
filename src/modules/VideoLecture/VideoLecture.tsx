import {
  TextInput,
  Group,
  Button,
  Flex,
  SimpleGrid,
  Card,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { LectureVideo } from '../../components/Lecture/LectureVideo';
import { BackButton } from '../../components/BackButton/BackButton.tsx';
import classes from './VideoLecture.module.css';

export interface VideoProps {
  id: number;
  src: string;
  title: string;
  description: string;
  department: string;
}

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

export const VideoLecture = () => {
  const form = useForm({
    initialValues: {
      videoName: '',
    },
  });
  return (
    <Flex direction='column' align='flex-start' bg='#FFF' mt='30px'>
      <Flex w='100%' justify='space-between' align='flex-end'>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
      <SimpleGrid
        cols={{ lg: 3, md: 2, sm: 2, base: 1 }}
        justify='flex-start'
        align='flex-start'
        gutter='30px'
        m='70px 0 140px'
      >
        {video.map((item) => (
          <Card key={item.id}>
            <LectureVideo video={item} />
          </Card>
        ))}
      </SimpleGrid>
    </Flex>
  );
};
