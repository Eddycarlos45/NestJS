import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>,
    ){}

    async findAll(): Promise<User[]>{
        return this.userRepository.find()
    }
    async create(user) {
        return this.userRepository.save(user)
    }
    async update(user: User, id: string) {
        return this.userRepository.update(id, user)
    }
    async remove(id: string) {
        return this.userRepository.delete(id)
    }
}