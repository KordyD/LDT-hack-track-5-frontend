import { Button, Flex, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { TextForInput, TextLarge } from '../../../theme/AdaptiveConts.ts';
import classes from './ArticleList.module.css';
export const ArticleList = ({ item }) => {
  // ТУТ БУДЕТ ЮЗ ПАРАМС И ПРОВАЛ В СТАТЬЮ
  return (
    <Button
      variant='white'
      color='#252525'
      classNames={{
        root: classes.articleList,
        label: classes.articleList__inner,
      }}
      component={Link}
      to={'/knowledge/:articleId'}
    >
      <Flex direction={'column'} align='flex-start'>
        <Text fz={TextLarge}>{item.name}</Text>
        <Text fz={TextForInput}>{item.description}</Text>
      </Flex>
    </Button>
  );
};
