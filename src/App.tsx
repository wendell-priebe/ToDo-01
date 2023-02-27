import { Header } from './components/Header/Header';

import styles from './App.module.css'
import './global.css';
import { Tasks } from './components/Tasks/Tasks';

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Tasks />
    </div>
  )
}

export default App
