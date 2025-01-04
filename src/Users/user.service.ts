import { HttpException, HttpStatus, Injectable } from "@nestjs/common";




@Injectable()
export class UserService{
    // findAll(): string {
    //   return 'Hi I am abdellah edaoudi';
    // }
    findUser(): string {
      // Search in db 'Abdellah'
      throw new HttpException("Invalid Name Abdellah",HttpStatus.NOT_FOUND) // 404 or HttpStatus.NOT_FOUND
      return 'Hi I am abdellah edaoudi';
    }
}