import { Box } from '@mantine/core';
import { useSelector } from 'react-redux';
import { CardLecture } from '../../components/CardLecture/CardLecture';
import { CompanyInfoCard } from '../../components/CompanyInfoCard/CompanyInfoCard';
import { FavoritesCard } from '../../components/FavoritesCard/FavoritesCard';
import { articles } from '../../helpers/Favorite';
import { RootState } from '../../store';
import { Articles } from '../Articles/Articles';
import classes from './CardsKnowledge.module.css';

export const CardsKnowledge = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.favorite} display={isAuth ? 'none' : 'block'}>
        <FavoritesCard heading='Избранное' articles={articles} />
      </Box>
      <Box className={classes.articles}>
        <Articles isAuth={isAuth} />
      </Box>
      <Box className={`${classes.info} ${isAuth ? classes.auth : ''}`}>
        <CompanyInfoCard
          heading='О компании'
          articles={articles}
          isAuth={isAuth}
        />
      </Box>
      <Box className={classes.lecture}>
        <CardLecture type='video' isAuth={isAuth} />
      </Box>
      <Box className={classes.lecture}>
        <CardLecture type='audio' isAuth={isAuth} />
      </Box>
    </Box>
  );
};
