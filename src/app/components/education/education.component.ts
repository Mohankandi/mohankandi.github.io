import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() education: Education;
}
