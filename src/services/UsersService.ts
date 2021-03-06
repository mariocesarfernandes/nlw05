import { User } from './../entities/User';
import { getCustomRepository, ReplicationMode, Repository } from 'typeorm';
import { UsersRepository } from './../repositories/UsersRepository';
export class UsersService {
  private usersRepository: Repository<User>

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {

    const userExists = await this.usersRepository.findOne({
      email
    });

    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

    return user;

  }

}