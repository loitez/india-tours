import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Courses, Main, Blog } from "./pages";

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
