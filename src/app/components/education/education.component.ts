import { Component, Input, OnChanges } from '@angular/core';
import { Education } from 'src/app/models/education';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnChanges {
  @Input() education: Education;
  public universityLogo: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {}

  getImageString(): string {
    if (!this.education || !this.education.collegeName) {
      console.log('No education or college name provided');
      return null;
    }
    
    // Special case for GitHub logo
    if (this.education.collegeName.toLowerCase().includes('github')) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png';
    }

    const imageName = this.education.collegeName
      .toLowerCase()
      .split(" ")
      .join("-")
      .concat(".png");
    console.log('Generated image name:', imageName);
    return `/assets/${imageName}`;
  }

  ngOnChanges() {
    if (this.education) {
      const imageUrl = this.getImageString();
      if (imageUrl) {
        console.log('Loading university logo from:', imageUrl);
        this.universityLogo = this.sanitizer.bypassSecurityTrustStyle(
          `url('${imageUrl}')`
        );
        console.log('Set university logo to:', this.universityLogo);
      }
    }
  }
}
