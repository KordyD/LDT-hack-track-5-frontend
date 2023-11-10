import { Box, Container } from '@mantine/core';
import { CardsKnowledge } from '../../modules/CardsKnowledge/CardsKnowledge';
import { InputKnowledge } from '../../modules/InputKnowledge/InputKnowledge';
import { history } from '../../helpers/History';
import { ModalHistory } from '../../components/ModalHistory/ModalHistory';
import { CardQuestion } from '../../modules/CardQuestion/CardQuestion.tsx';

export const Knowledge = () => {
  return (
    <>
      <Container size='xl'>
        <Box mb={10}>
          <InputKnowledge />
        </Box>
        <ModalHistory history={history} />
        <CardsKnowledge />
        <CardQuestion />
      </Container>
    </>
  );
};
