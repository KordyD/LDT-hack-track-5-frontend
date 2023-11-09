import { Box, Button, Card, Group, Title } from '@mantine/core';
import { IconContext } from 'react-icons';
import { FiStar } from 'react-icons/fi';
import { ScrollAreaCard } from '../ScrollAreaCard/ScrollAreaCard';
import classes from './FavoritesCard.module.css';
interface FavoritesCardProps {
  heading: string;
  articles: { heading: string; text: string }[];
  isAuth?: boolean;
}

export const FavoritesCard = ({ heading, articles }: FavoritesCardProps) => {
  return (
    <Card className={classes.card}>
      <Box className={classes.wrapper}>
        <Group justify='space-between' mb='lg'>
          <Group>
            <IconContext.Provider value={{ className: classes.icon }}>
              <FiStar />
            </IconContext.Provider>
            <Title order={2}>{heading}</Title>
          </Group>
        </Group>
        <ScrollAreaCard articles={articles} mah={500} />
      </Box>

      <Box>
        <Button
          fullWidth
          mt='lg'
          radius='xl'
          variant='light'
          // TODO Add link to button
        >
          Все статьи
        </Button>
      </Box>
    </Card>
  );
};
