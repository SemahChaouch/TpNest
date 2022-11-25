import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PipePipe implements PipeTransform {
  transform(value: {skills:string[]}, metadata: ArgumentMetadata) {
    if(!value.skills){
      console.log(value.skills)
      throw new BadRequestException('Error')
    }
    if (metadata.type=='body'){
      return value.skills.map(e=>e.toUpperCase()).join('-')
    }
  }
}

