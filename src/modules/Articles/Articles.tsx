import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { AiOutlinePlus, AiOutlinePaperClip } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { CustomActionIcon } from '../../components/ActionIcon/ActionIcon';
import { articlesMain } from '../../helpers/Articles';
import classes from './Articles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDisclosure } from '@mantine/hooks';
import { PiPencilSimple } from 'react-icons/pi';

export const Articles = () => {
  const isAuth = useSelector((state: RootState) => state.isAuth);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card className={classes.card}>
      <Group mb={20} justify='space-between' display={isAuth ? 'flex' : 'none'}>
        <IconContext.Provider value={{ className: classes.icon }}>
          <Button
            variant='white'
            rightSection={<AiOutlinePlus />}
            onClick={open}
          >
            Добавить статью
          </Button>
        </IconContext.Provider>

        <Modal
          title='Добавить статью'
          opened={opened}
          onClose={close}
          radius={'xl'}
          classNames={{ title: classes.modalTitle }}
        >
          <Stack>
            <TextInput
              placeholder='Название'
              classNames={{
                root: classes.modalInputRoot,
                input: classes.modalInput,
              }}
            />
            <Textarea
              placeholder='Описание'
              classNames={{
                root: classes.modalInputRoot,
                input: classes.modalAreaInput,
              }}
            />
            <Group justify='center'>
              <Button
                rightSection={<AiOutlinePaperClip />}
                className={classes.modalButton}
              >
                Прикрепить файл
              </Button>
              <Button className={classes.modalButton}>Сохранить</Button>
            </Group>
          </Stack>
        </Modal>
        <ActionIcon radius='xl' display={isAuth ? 'flex' : 'none'}>
          <PiPencilSimple />
        </ActionIcon>
      </Group>
      <ScrollArea.Autosize mah={900}>
        <Stack gap={0}>
          {articlesMain.map((item, index) => (
            <Box
              td='none'
              component={Link}
              to={`/knowledge/${item.id}`}
              key={item.id}
            >
              <Group className={classes.group}>
                <Text>{item.title}</Text>
                <IconContext.Provider value={{ className: classes.icon }}>
                  <CustomActionIcon>
                    <AiOutlinePlus />
                  </CustomActionIcon>
                </IconContext.Provider>
              </Group>
              <Divider
                display={index == articlesMain.length - 1 ? 'none' : 'block'}
              />
            </Box>
          ))}
        </Stack>
      </ScrollArea.Autosize>
    </Card>
  );
};
