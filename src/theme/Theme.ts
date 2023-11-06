import { Button, createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'indigo',
  fontFamily: 'Liberation',
  fontSizes: {
    md: '18px',
  },
  headings: {
    fontWeight: '400',
  },
  components: {
    Button: Button.extend({ defaultProps: { fw: '400', fz: 'md' } }),
  },
});
