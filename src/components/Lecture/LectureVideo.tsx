import { Flex, AspectRatio, Text } from '@mantine/core';
import classes from '../../pages/VideoLecture/VideoLecture.module.css';
import { VideoProps } from '../../pages/VideoLecture/VideoLecture';

interface LectureVideo {
  video: VideoProps;
}

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
      <Flex direction='column' m='30px auto 40px 22px'>
        <Flex align='center' gap='13px' mb='8px'>
          <Text truncate='end' className={classes.lecturevideo__title}>
            {video.title}
          </Text>
          <Text truncate='end' className={classes.lecturevideo__description}>
            {video.description}
          </Text>
        </Flex>
        <Text className={classes.lecturevideo__department}>
          {video.department}
        </Text>
      </Flex>
    </Flex>
  );
};
