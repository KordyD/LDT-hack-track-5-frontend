import { ActionIcon, Box, Text, Title } from '@mantine/core';
import { BiSolidBookmark } from 'react-icons/bi';

export const Article = () => {
  return (
    <>
      <Box pos='relative'>
        <ActionIcon pos='absolute' variant='transparent' right='0'>
          <BiSolidBookmark style={{ width: 40, height: 40 }} />
        </ActionIcon>
        <Title>Lorem ipsum dolor sit amet.</Title>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          blanditiis ducimus temporibus fugit quis officia eligendi eum quia
          natus error!
        </Text>
      </Box>
    </>
  );
};
