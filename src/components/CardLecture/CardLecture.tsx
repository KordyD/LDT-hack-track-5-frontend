import { Button, Card, Container, Text } from '@mantine/core';

export const CardLecture = () => {
  return (
    <Card bg='indigo'>
      <Text c='gray.0'>Курс видеолекций</Text>
      <Container fluid>
        <Button variant='outline' color='gray.0'>
          Начать
        </Button>
      </Container>
    </Card>
  );
};
