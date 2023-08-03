import { Injectable } from "@angular/core";
import { HttpService } from "../http-service.service";

@Injectable({
  providedIn: "root",
})
export class TaskHttpService {
  constructor(private httpService: HttpService) {}

  getAllTask(): any {
    return this.httpService.get<any>("admin/tasks");
  }

  createTask(data: any): any {
    return this.httpService.post<any>("admin/task", data);
  }

  getTask(id: string): any {
    return this.httpService.get<any>("admin/task/" + id);
  }

  changeTaskState(data: any): any {
    return this.httpService.put<any>("admin/task-status", data);
  }

  deleteTask(id: string): any {
    return this.httpService.delete<any>("admin/task/" + id);
  }
}
