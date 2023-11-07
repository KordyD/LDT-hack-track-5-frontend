import { ActionIcon, Box, Text, Title } from '@mantine/core';
import { BiSolidBookmark } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

interface loaderData {
  title: string;
  text: string;
}

export const Article = () => {
  const { title, text } = useLoaderData() as loaderData;
  return (
    <>
      <Box pos='relative'>
        <ActionIcon pos='absolute' variant='transparent' right='0'>
          <BiSolidBookmark style={{ width: 40, height: 40 }} />
        </ActionIcon>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Box>
    </>
  );
};
