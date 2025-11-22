import styles from "./App.module.scss";
import './assets/fonts.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {About, Courses, Main, Blog, Course, ApplicationForm, Authorization, Registration} from "./pages";
import '@fortawesome/fontawesome-free/css/all.css';
import {useSelector} from "react-redux";

export const App = () => {
  const isLoading = useSelector((state) => state.loader.isLoading);

  return (
  !isLoading &&
  (<div className={styles.app}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<Course/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/application-form" element={<ApplicationForm/>}/>
        <Route path="/login" element={<Authorization/>}/>
        <Route path="/register" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  </div>)
  );
};
