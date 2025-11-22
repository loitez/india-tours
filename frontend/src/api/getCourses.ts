export const getCourses = () =>
  fetch("/api/courses", {
    method: "GET",
  }).then((res) => res.json());
