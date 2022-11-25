import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository : Repository<User> 
){}

  async adduser(user: CreateUserDto): Promise<User>{
    return await this.userRepository.save(user);
   }
  async getAllUsers(): Promise<User[]>{
    return this.userRepository.find()
} 
  async updateUser(id:number,user: UpdateUserDto): Promise<User>{
  const newuser = await this.userRepository.preload({
      id, ...user
  });
  if (!newuser){
      throw NotFoundException
  }
  return await this.userRepository.save(newuser);
}
  async removeuser(id:number){
  return await this.userRepository.delete(id)
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
