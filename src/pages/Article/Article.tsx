import { ActionIcon, Box, Text, Title } from '@mantine/core';
import { BiSolidBookmark } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { BackButton } from '../../components/BackButton/BackButton';
import { ArticleModal } from '../../modules/ArticleModal/ArticleModal';
import { RootState } from '../../store';
import classes from './Article.module.css';

interface loaderData {
  title: string;
  text: string;
}

export const Article = () => {
  const { title, text } = useLoaderData() as loaderData;
  const isAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <>
      <Box pos='relative'>
        <BackButton variant='transparent'>Назад</BackButton>
        <Box className={classes.box}>
          <ArticleModal isAuth={isAuth} />
          <ActionIcon display={isAuth ? 'none' : 'block'} variant='transparent'>
            <BiSolidBookmark style={{ width: 40, height: 40 }} />
          </ActionIcon>
        </Box>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Box>
    </>
  );
};
