import styles from "./App.module.scss";
import { Header } from "./components";

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
};
