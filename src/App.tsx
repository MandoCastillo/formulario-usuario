import './App.css';
import UserForm from './pages/UserForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FormProvider } from './context/FormContext';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F46D11',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <FormProvider>
        <CssBaseline />
        <UserForm />
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
