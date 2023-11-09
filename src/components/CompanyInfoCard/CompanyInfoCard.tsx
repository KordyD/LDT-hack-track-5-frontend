import { Box, Button, Card, Group, Title } from '@mantine/core';
import { IconContext } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { EditButton } from '../EditButton/EditButton';
import { ScrollAreaCard } from '../ScrollAreaCard/ScrollAreaCard';
import classes from './CompanyInfoCard.module.css';
interface CompanyInfoCardProps {
  heading: string;
  articles: { heading: string; text: string }[];
  isAuth?: boolean;
}

export const CompanyInfoCard = ({
  heading,
  articles,
  isAuth = false,
}: CompanyInfoCardProps) => {
  return (
    <Card className={classes.card}>
      <Box className={classes.wrapper}>
        <Group justify='space-between' mb='lg'>
          <Group>
            <IconContext.Provider value={{ className: classes.icon }}>
              <AiOutlineInfoCircle />
            </IconContext.Provider>
            <Title order={2}>{heading}</Title>
          </Group>
          <EditButton display={isAuth ? 'flex' : 'none'} />
        </Group>
        <ScrollAreaCard
          articles={articles}
          mah={isAuth ? { base: 500, md: 1200 } : 500}
        />
      </Box>

      <Box>
        <Button fullWidth mt='lg' radius='xl' variant='filled'>
          Все статьи
        </Button>
      </Box>
    </Card>
  );
};
