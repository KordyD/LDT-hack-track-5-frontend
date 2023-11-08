import { Button, ButtonProps } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const BackButton = ({ children, ...props }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} {...props}>
      {children}
    </Button>
  );
};
