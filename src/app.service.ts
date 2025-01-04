import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    const filePath = join(__dirname, '..', 'src', 'index.html');
    return readFileSync(filePath, 'utf8');
  }
}
