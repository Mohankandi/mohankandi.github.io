import { Component, Input } from "@angular/core";
import { Project } from "src/app/models/project";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Component({
  selector: "project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent {
  @Input() project: Project;

  public backGroundImg: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {}

  getImageString(): string {
    if (!this.project || !this.project.clientName) {
      return null;
    }
    const imageName = this.project.clientName
      .toLowerCase()
      .split(" ")
      .join("-")
      .concat(".png");
    console.log('Generated image name:', imageName);
    return imageName;
  }

  ngOnChanges(changes) {
    if (changes && changes.project) {
      const imageUrl = `/assets/${this.getImageString()}`;
      console.log('Trying to load image from:', imageUrl);
      this.backGroundImg = this.sanitizer.bypassSecurityTrustStyle(
        `url('${imageUrl}')`
      );
    }
  }
}
