import course from "./course.data.json";

export const getCourses = () => {
  return course || [];
};
export const getCourseById = courseId => {
  return getCourses().find(course => course.courseId === courseId);
};
