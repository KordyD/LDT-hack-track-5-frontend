import { ActionIcon, Card, Group, Stack, Text } from '@mantine/core';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Articles = () => {
  return (
    <Card shadow='md' withBorder radius='xl' p='lg'>
      <Stack gap='lg' style={{ overflowY: 'scroll' }}>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/1'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/2'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/3'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/4'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/4'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/4'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/4'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/4'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/4'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
        <Group justify='space-between' p='lg'>
          <Text>Как устроена компания</Text>
          <ActionIcon variant='transparent' component={Link} to='/knowledge/4'>
            <AiOutlinePlus style={{ width: '40px', height: '40px' }} />
          </ActionIcon>
        </Group>
      </Stack>
    </Card>
  );
};
