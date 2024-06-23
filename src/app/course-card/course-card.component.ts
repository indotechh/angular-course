import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  course: Course;

  @Input({
    required: true
  })
  index: number;

  @Output("courseSelected")
  courseEmiter = new EventEmitter<Course>();




  onCourseViewed() {
    console.log("course card ")
    this.courseEmiter.emit(this.course);
  }

  cardClasses() {
   if( this.course.category === 'BEGINNER') {
      return ['biginner'];
      // return 'biginner';
    }
  }

  cardStyles(){
    return {'text-decoration' : 'underline'};
  }
}
