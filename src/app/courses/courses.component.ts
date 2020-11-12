import {Component, OnInit} from '@angular/core';
import {CoursesService} from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Complete remote update call
  // STEP 02: Complete remote delete call

  selectedCourse = null;

  courses = null;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  resetSelectedCourse() {
    this.selectedCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  loadCourses() {
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course)
        .subscribe(result => this.loadCourses());
    } else {
      this.coursesService.create(course)
        .subscribe(result => this.loadCourses());
    }
    this.cancel();
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
      .subscribe(result => this.loadCourses());
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
