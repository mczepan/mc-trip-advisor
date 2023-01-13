import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: '2px 4px',
  margin: '10px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));
