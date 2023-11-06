import { Grid, TextInput, Group, Button, Flex, Image } from '@mantine/core';
import classes from './VideoLecture.module.css';
import { LectureVideo } from '../../components/Lecture/LectureVideo';
import { useForm } from '@mantine/form';
import Back from '../../assets/icon/BackArrow.svg';

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
    <Flex direction='column' align='flex-start' w='1308px' bg='#FFF' mt='30px'>
      <Flex w='100%' justify='space-between' align='flex-end'>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            classNames={{ input: classes.lecturevideo__input }}
            placeholder='Введите ключевые слова'
            {...form.getInputProps('videoName')}
          />

          <Group justify='flex-start' mt='md'>
            <Button
              className={`${classes.lecturevideo__button} ${classes.lecturevideo__buttonSearch}`}
              type='submit'
            >
              Найти
            </Button>
            <Button className={classes.lecturevideo__button} type='button'>
              Очистить
            </Button>
          </Group>
        </form>
        <Button
          className={classes.lecturevideo__button}
          bg='transparent'
          leftSection={<Image src={Back} w='15px' h='15px' />}
        >
          Назад
        </Button>
      </Flex>
      <Grid
        justify='flex-start'
        align='flex-start'
        gutter='30px'
        m='70px 0 140px'
      >
        {video.map((item) => (
          <Grid.Col span={4} key={item.id}>
            <LectureVideo video={item} />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
};
