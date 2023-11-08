import { Box } from '@mantine/core';
import { CardKnowledge } from '../../components/CardKnowledge/CardKnowledge';
import { FiStar } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Articles } from '../Articles/Articles';
import { CardLecture } from '../../components/CardLecture/CardLecture';
import { articles } from '../../helpers/Favorite';
import classes from './CardsKnowledge.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const CardsKnowledge = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.favorite} display={isAuth ? 'none' : 'block'}>
        <CardKnowledge
          heading='Избранное'
          icon={<FiStar />}
          articles={articles}
        />
      </Box>
      <Box className={classes.articles}>
        <Articles />
      </Box>
      <Box className={`${classes.info} ${isAuth ? classes.auth : ''}`}>
        <CardKnowledge
          heading='О компании'
          icon={<AiOutlineInfoCircle />}
          articles={articles}
          styleDark={true}
        />
      </Box>
      <Box className={classes.lecture}>
        <CardLecture />
      </Box>
      <Box className={classes.lecture}>
        <CardLecture />
      </Box>
    </Box>
  );
};
