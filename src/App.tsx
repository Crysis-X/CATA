import Field, { FieldSettings } from './components/Field/Field';
import './App.css';

function App() {
  const settings: FieldSettings = {
    targetColor: 'red',
    cooldown: 750,
    w: '50px',
    h: '50px'
  }
  return (
    <>
      <Field settings={settings} />
    </>
  )
}

export default App
