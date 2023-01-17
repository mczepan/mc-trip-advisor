import { CssBaseline } from '@mui/material';
import MainTemplate from 'components/templates/MainTemplate';
import { usePosition } from 'hooks/usePosition';
import './App.css';

const App = () => {
  usePosition();
  return (
    <>
      <CssBaseline />
      <MainTemplate></MainTemplate>
    </>
  );
};

export default App;
