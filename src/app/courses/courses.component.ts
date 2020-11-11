import {Component, OnInit} from '@angular/core';

interface Course {
  id: number;
  title: string;
  description: string;
  percentComplete: number;
  favorite: boolean;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  selectedCourse: Course = null;

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.resetSelectedCourse();
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

  saveCourse(course: Course) {
    this.courses = [...this.courses, course];
  }

  deleteCourse(courseId) {
    this.courses = this.courses.filter(({id}) => id !== courseId);
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  cancel() {
    this.resetSelectedCourse();
  }

}
