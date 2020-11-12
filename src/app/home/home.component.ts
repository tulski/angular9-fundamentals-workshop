import {Component, OnInit} from '@angular/core';
import {LessonsService} from "../shared/services/lessons.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Hello Workshop';
  lessons = null;
  currentLesson = null;

  // CHALLENGE
  // STEP 01: Create a LessonsService
  // hint: ng g shared/services/lessons -d
  // STEP 02: Add the lessons service to app.module
  // STEP 03: Inject lessons service into component
  // STEP 04: Move lessons to service and consume in component


  constructor(private lessonsService: LessonsService) {
  }

  ngOnInit(): void {
    this.lessons = this.lessonsService.all();
  }

  selectLesson(lesson) {
    console.log('SELECT LESSON FIRED!', lesson);
    this.currentLesson = lesson;
  }
}
