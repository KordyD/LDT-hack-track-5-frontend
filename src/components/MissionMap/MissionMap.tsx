import { Box, Image } from '@mantine/core';
import classes from './MissionMap.module.css';
import part1 from '../../assets/icon/1part.svg';
import part2 from '../../assets/icon/2part.svg';
import part3 from '../../assets/icon/3part.svg';
import part4 from '../../assets/icon/4part.svg';
import part5 from '../../assets/icon/5part.svg';
import part6 from '../../assets/icon/6part.svg';
import StartPart from '../../assets/icon/StarPart.svg';
import { useState } from 'react';

export const MissionMap = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Box className={classes.missionmap}>
      <Box
        className={`${classes.missionmap__box} ${classes.missionmap__box1} ${
          isActive ? classes.missionmap__boxActive : ''
        }`}
      >
        <Image src={part1} />
      </Box>
      <Box
        className={`${classes.missionmap__box} ${classes.missionmap__box2} ${
          isActive ? classes.missionmap__boxActive : ''
        }`}
      >
        <Image src={part2} />
      </Box>
      <Box
        className={`${classes.missionmap__box} ${classes.missionmap__box3} ${
          isActive ? classes.missionmap__boxActive : ''
        }`}
      >
        <Image src={part3} />
      </Box>
    </Box>
  );
};

export default MissionMap;
