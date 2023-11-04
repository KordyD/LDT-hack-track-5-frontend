import { ActionIcon, ActionIconProps } from '@mantine/core';
import classes from './ActionIcon.module.css';

export const CustomActionIcon = ({ ...props }: ActionIconProps) => {
  return (
    <ActionIcon className={classes.actionIcon}>{props.children}</ActionIcon>
  );
};
