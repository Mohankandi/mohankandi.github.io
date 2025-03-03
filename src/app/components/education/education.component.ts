import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education';
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() education: Education;
  public backGroundImg: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {}

  getImageString(): string {
    if (!this.education || !this.education.collegeName) {
      return null;
    }
    return this.education.collegeName
      .toLowerCase()
      .split(" ")
      .join("")
      .toString()
      .concat(".png");
  }

  ngOnChanges(changes) {
    if (changes && changes.education) {
      this.backGroundImg = this.sanitizer.bypassSecurityTrustStyle(
        `url('../../../dist/assets/${this.getImageString()}')`
      );
    }
  }
}
