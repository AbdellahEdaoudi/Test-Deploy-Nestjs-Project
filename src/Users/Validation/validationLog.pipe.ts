
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationLog implements PipeTransform {
  transform(value: any) {
    console.log(`this is Log 1 : ${value}`);
    
    return value;
  }
}
