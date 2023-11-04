import { ActionIcon, Anchor, Card, Group, Image, Text } from '@mantine/core';
import { LiaTelegram } from 'react-icons/lia';
export const CardTeam = () => {
  return (
    <Card maw='450px' radius='xl' shadow='xl'>
      <Card.Section>
        <Image src='' fallbackSrc='/src/assets/placeholder.jpg' />
      </Card.Section>
      <Text size='xl' fw='600'>
        Хакатонов Хакатон
      </Text>
      <Text>г. Краснодар</Text>
      <Anchor>Руководитель отдела разработки</Anchor>
      <Group wrap='wrap' gap='sm' mt='md'>
        <Group>
          <ActionIcon radius='xl' variant='light' component='a'>
            <LiaTelegram />
          </ActionIcon>
          <Anchor>t.me/blabalbal</Anchor>
        </Group>
        <Group>
          <ActionIcon radius='xl' variant='light' component='a'>
            <LiaTelegram />
          </ActionIcon>
          <Anchor>t.me/blabalbal</Anchor>
        </Group>
        <Group>
          <ActionIcon radius='xl' variant='light' component='a'>
            <LiaTelegram />
          </ActionIcon>
          <Anchor>t.me/blabalbal</Anchor>
        </Group>
      </Group>
    </Card>
  );
};
