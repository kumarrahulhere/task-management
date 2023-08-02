import { Component } from "@angular/core";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent {
  public Editor = ClassicEditor;
  public configEditor = { placeholder: "Type the content here!" };
}
