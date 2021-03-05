import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      console.error({ messageError: error });
    }
  }
  async create(user) {
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      console.error({ messageError: error });
    }
  }
  async update(user: User, id: string) {
    try {
      return await this.userRepository.update(id, user);
    } catch (error) {
      console.error({ messageError: error });
    }
  }
  async remove(id: string) {
    try {
      return await this.userRepository.delete(id);
    } catch (error) {
      console.error({ messageError: error });
    }
  }
}
