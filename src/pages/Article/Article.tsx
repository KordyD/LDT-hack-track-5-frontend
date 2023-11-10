import { ActionIcon, Box, Container, Text, Title } from '@mantine/core';
import { BiSolidBookmark } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { Article as IArticle } from '../../API/knowledge-base/interfaces';
import { BackButton } from '../../components/BackButton/BackButton';
import { ArticleModal } from '../../modules/ArticleModal/ArticleModal';
import { RootState } from '../../store';
import classes from './Article.module.css';

export const Article = () => {
  const { theme, information } = useLoaderData() as IArticle;
  const roles = useSelector((state: RootState) => state.roles);
  const isAdmin = roles.includes('ROLE_ADMIN');

  return (
    <>
      <Container size='xl'>
        <Box pos='relative'>
          <BackButton variant='transparent'>Назад</BackButton>
          <Box className={classes.box}>
            <ArticleModal />
            <ActionIcon
              display={isAdmin ? 'none' : 'block'}
              variant='transparent'
            >
              <BiSolidBookmark style={{ width: 40, height: 40 }} />
            </ActionIcon>
          </Box>
          <Title>{theme}</Title>
          <Text>{information}</Text>
        </Box>
      </Container>
    </>
  );
};
