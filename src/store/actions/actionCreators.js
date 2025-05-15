import * as at from "./actionTypes";

// ACTION CREATORS

// All Campuses
export const fetchAllCampuses = (campuses) => ({
  type: at.FETCH_ALL_CAMPUSES,
  payload: campuses,
});

export const addCampus = (campus) => ({
  type: at.ADD_CAMPUS,
  payload: campus,
});

export const deleteCampus = (campusId) => ({
  type: at.DELETE_CAMPUS,
  payload: campusId,
});

// Single Campus
export const fetchCampus = (campus) => ({
  type: at.FETCH_CAMPUS,
  payload: campus,
});

export const updateCampus = (campus) => ({
  type: at.UPDATE_CAMPUS,
  payload: campus,
});

// All Students
export const fetchAllStudents = (students) => ({
  type: at.FETCH_ALL_STUDENTS,
  payload: students,
});

export const addStudent = (student) => ({
  type: at.ADD_STUDENT,
  payload: student,
});

export const deleteStudent = (studentId) => ({
  type: at.DELETE_STUDENT,
  payload: studentId,
});

export const editStudent = (student) => ({
  type: at.EDIT_STUDENT,
  payload: student,
});

// Single Student
export const fetchStudent = (student) => ({
  type: at.FETCH_STUDENT,
  payload: student,
});

