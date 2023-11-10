import { Flex, AspectRatio, Text, Image, Button } from '@mantine/core';
import {
  Image40,
  TextForInput,
  TextMiddle,
  TextSmall,
} from '../../theme/AdaptiveConts.ts';
import { VideoProps } from '../../modules/VideoLecture/VideoLecture';
import Trash from '../../assets/images/TrashBin.png';
import classes from './LectureVideo.module.css';

interface LectureVideo {
  video: VideoProps;
}

const role = 'ADMIN';

export const LectureVideo = ({ video }: LectureVideo) => {
  return (
    <Flex className={classes.lecturevideo}>
      <AspectRatio ratio={16 / 9}>
        <iframe
          className={classes.lecturevideo__video}
          src={video.src}
          title={video.title}
          style={{ border: 0 }}
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </AspectRatio>
      <Flex
        direction='row'
        m='30px auto 40px 22px'
        justify={'space-between'}
        w='90%'
      >
        <Flex direction='column'>
          <Flex align='center' gap='13px' mb='8px'>
            <Text
              truncate='end'
              className={classes.lecturevideo__title}
              fz={TextMiddle}
            >
              {video.title}
            </Text>
            <Text
              truncate='end'
              className={classes.lecturevideo__description}
              fz={TextSmall}
            >
              {video.description}
            </Text>
          </Flex>
          <Text className={classes.lecturevideo__department} fz={TextForInput}>
            {video.department}
          </Text>
        </Flex>
        {role === 'ADMIN' ? (
          <Button
            variant='white'
            rightSection={<Image src={Trash} w={Image40} h={Image40} />}
            classNames={{
              root: classes.lecturevideo__button,
            }}
          ></Button>
        ) : (
          ''
        )}
      </Flex>
    </Flex>
  );
};
