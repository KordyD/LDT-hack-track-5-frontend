import { Box, Container } from '@mantine/core';
import { CardsKnowledge } from '../../modules/CardsKnowledge/CardsKnowledge';
import { InputKnowledge } from '../../modules/InputKnowledge/InputKnowledge';
import { history } from '../../helpers/History';
import { ModalHistory } from '../../components/ModalHistory/ModalHistory';
import { CardQuestion } from '../../modules/CardQuestion/CardQuestion.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index.ts';

export const Knowledge = () => {
  const roles = useSelector((state: RootState) => state.roles);
  const isAdmin = roles.includes('ROLE_ADMIN');

  return (
    <>
      <Container size='xl'>
        <Box mb={10}>
          <InputKnowledge />
        </Box>
        <ModalHistory history={history} />
        <CardsKnowledge />
        <Box display={isAdmin ? 'none' : 'block'}>
          <CardQuestion />
        </Box>
      </Container>
    </>
  );
};
