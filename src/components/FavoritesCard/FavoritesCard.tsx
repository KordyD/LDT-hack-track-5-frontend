import { Box, Button, Card, Group, Title } from '@mantine/core';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getAllFavorites } from '../../API/knowledge-base';
import { ArticlesName } from '../../API/knowledge-base/interfaces';
import { ScrollAreaCard } from '../ScrollAreaCard/ScrollAreaCard';
import classes from './FavoritesCard.module.css';

export const FavoritesCard = () => {
  useEffect(() => {
    getAllFavorites()
      .then((values) => {
        setArticles(values);
      })
      .catch((error) => {
        const err = error as AxiosError;
        console.log(err.response?.data);
      });
  }, []);

  const [articles, setArticles] = useState<ArticlesName[]>([]);

  return (
    <Card className={classes.card}>
      <Box className={classes.wrapper}>
        <Group justify='space-between' mb='lg'>
          <Group>
            <IconContext.Provider value={{ className: classes.icon }}>
              <FiStar />
            </IconContext.Provider>
            <Title order={2}>Избранное</Title>
          </Group>
        </Group>
        <ScrollAreaCard articles={articles} mah={500} question={false} />
      </Box>

      <Box>
        <Button
          fullWidth
          mt='lg'
          radius='xl'
          variant='light'
          component={Link}
          to='/favourites'
        >
          Все статьи
        </Button>
      </Box>
    </Card>
  );
};
