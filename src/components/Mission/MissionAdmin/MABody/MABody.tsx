import { Flex } from '@mantine/core';
import { MissionMap } from '../../MissionMap/MissionMap.tsx';
import { MissionAccordion } from '../../MissionAccordion/MissionAccordion.tsx';

export const MaBody = () => {
  return (
    <Flex direction='column' align='center'>
      <MissionMap />
      <MissionAccordion />
    </Flex>
  );
};
