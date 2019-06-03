import {combineReducers} from 'redux';
import loadAdminReducer from './loadAdminReducer';
import loadAttendanceReducer from './loadAttendanceReducer';
import loginStudentReducer from './loginStudentReducer';
import loadStudentReducer from './loadStudentReducer';
import loadCourseClassReducer from './loadCourseClassReducer';
import loadStudentListReducer from './loadStudentListReducer';
import loginFacultyReducer from './loginFacultyReducer';
import loadFacultyReducer from './loadFacultyReducer';
import loadDetentionListReducer from './loadDetentionListReducer';

const rootReducer=combineReducers({
    loadAdminReducer,
    loadAttendanceReducer,
    loginStudentReducer,
    loadStudentReducer,
    loadCourseClassReducer,
    loadStudentListReducer,
    loginFacultyReducer,
    loadFacultyReducer,
    loadDetentionListReducer
});

export default rootReducer;