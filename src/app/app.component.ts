import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES
  courses1 = COURSES

  onCourseSeleced(course: Course){
    console.log("appcomponet click- click event bubbled" + JSON.stringify(course));
  }

  trackCourse(index : number, course: Course){
    return course.id;
  }
}
