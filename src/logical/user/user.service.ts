import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findUser(username: string): string {
    if (username === 'john') {
      return 'john is here.';
    }

    return 'no one here.';
  }
}
