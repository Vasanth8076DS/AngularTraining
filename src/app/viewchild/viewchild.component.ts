import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-viewchild",
  templateUrl: "./viewchild.component.html",
  styleUrls: ["./viewchild.component.scss"],
})
export class ViewchildComponent implements AfterViewInit {
  public size: string | undefined;
  name: string | undefined;
  age: string | undefined;
  @ViewChild("nameRef") nameElementRef: ElementRef | undefined;

  ngAfterViewInit(): void {
    this.size = this.nameElementRef?.nativeElement.__ngContext__;

    console.log("ViewChild", this.nameElementRef);
  }
}
