import { Grid } from '@mantine/core';
import { CardKnowledge } from '../../components/CardKnowledge/CardKnowledge';
import { FiStar } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Articles } from '../Articles/Articles';
import { CardLecture } from '../../components/CardLecture/CardLecture';

export const CardsKnowledge = () => {
  const articles = [
    {
      heading: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, rerum!',
    },
    {
      heading: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, rerum!',
    },
    {
      heading: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, rerum!',
    },
    {
      heading: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, rerum!',
    },
    {
      heading: 'Lorem ipsum dolor sit amet.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, rerum!',
    },
  ];
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <CardKnowledge
            heading='Избранное'
            icon={<FiStar />}
            articles={articles}
          />
        </Grid.Col>
        <Grid.Col span={8}>
          <Articles />
        </Grid.Col>
        <Grid.Col span={4}>
          <CardKnowledge
            heading='О компании'
            icon={<AiOutlineInfoCircle />}
            articles={articles}
            styleDark={true}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <CardLecture />
        </Grid.Col>
        <Grid.Col span={4}>
          <CardLecture />
        </Grid.Col>
      </Grid>
    </>
  );
};
