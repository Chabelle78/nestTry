import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Je suis lpb du monde entier';
  }
  getLPB(): string {
    return 'lol jy suis arrivée';
  }
}
