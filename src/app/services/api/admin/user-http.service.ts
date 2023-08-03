import { Injectable } from "@angular/core";
import { HttpService } from "../http-service.service";

@Injectable({
  providedIn: "root",
})
export class UserHttpService {
  constructor(private httpService: HttpService) {}
  getUsers(): any {
    return this.httpService.get<any>("admin/users");
  }
  deleteUser(id: string): any {
    return this.httpService.delete<any>("admin/user/" + id);
  }
  toggleUserVerification(data: any): any {
    return this.httpService.put<any>("admin/toggle-user-verification", data);
  }
}
