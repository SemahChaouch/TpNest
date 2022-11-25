import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Cv } from './entities/cv.entity';

@Injectable()
export class CvsService {
  constructor(
    @InjectRepository(Cv)
    private cvRepository : Repository<Cv> 
){}

  async addcv(cv: CreateCvDto,user:User): Promise<Cv>{
    return await this.cvRepository.save(cv);
   }
  async getAllcvs(): Promise<Cv[]>{
    return this.cvRepository.find()
} 
  async updatecv(id:number,cv: UpdateCvDto): Promise<Cv>{
  const newcv = await this.cvRepository.preload({
      id, ...cv
  });
  if (!newcv){
      throw NotFoundException
  }
  return await this.cvRepository.save(newcv);
}
  async removecv(id:number){
  return await this.cvRepository.delete(id)
  }
  
  create(createCvDto: CreateCvDto) {
    return 'This action adds a new cv';
  }

  findAll() {
    return `This action returns all cvs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cv`;
  }

  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} cv`;
  }

  remove(id: number) {
    return `This action removes a #${id} cv`;
  }
}
