import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { BackButton } from '../../components/BackButton/BackButton.tsx';
import { TextMiddle } from '../../theme/AdaptiveConts.ts';
import sort from '../../assets/icon/sort.svg';
import filter from '../../assets/icon/filter.svg';
import { ArticleList } from './ArticleList/ArticleList.tsx';

const list = [
  {
    id: 1,
    name: 'list1',
    description: 'Kompaniya',
  },
  {
    id: 2,
    name: 'list2',
    description: 'Kompaniya',
  },
  {
    id: 3,
    name: 'list3',
    description: 'Kompaniya',
  },
];

export const Questions = () => {
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
          {list.map((item) => (
            <ArticleList item={item} key={item.id} />
          ))}
        </Flex>
      </Box>
    </Container>
  );
};
