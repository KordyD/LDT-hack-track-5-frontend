import { Box, Button, Container, Flex, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getAllArticles } from '../../API/knowledge-base/index.ts';
import { ArticlesName } from '../../API/knowledge-base/interfaces.ts';
import filter from '../../assets/icon/filter.svg';
import sort from '../../assets/icon/sort.svg';
import { BackButton } from '../../components/BackButton/BackButton.tsx';
import { TextMiddle } from '../../theme/AdaptiveConts.ts';
import { ArticleList } from '../Questions/ArticleList/ArticleList.tsx';

export const Favourites = () => {
  useEffect(() => {
    getAllArticles().then((values) => setArticles(values));
  }, []);
  const [articles, setArticles] = useState<ArticlesName[]>([]);

  return (
    <Container size='xl'>
      <Box pos='relative'>
        <BackButton variant='transparent' mb='15px'>
          Назад
        </BackButton>
        <Flex w='100%' justify='space-between'>
          <Button
            fz={TextMiddle}
            p='0'
            variant='white'
            color='#5277F6'
            rightSection={<Image src={sort} />}
          >
            Сортировка
          </Button>
          <Button
            fz={TextMiddle}
            p='0'
            variant='white'
            color='#5277F6'
            rightSection={<Image src={filter} />}
          >
            Фильтр
          </Button>
        </Flex>
        <Flex align='center' gap='15px' direction='column' mt='20px'>
          {articles.map((item) => (
            <ArticleList article={item} key={item.id} />
          ))}
        </Flex>
      </Box>
    </Container>
  );
};
