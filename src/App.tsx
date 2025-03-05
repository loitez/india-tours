import styles from "./App.module.scss";
import './assets/fonts.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Courses, Main, Blog } from "./pages";
import '@fortawesome/fontawesome-free/css/all.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
