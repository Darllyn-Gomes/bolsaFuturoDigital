import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const { email, password } = createUsuarioDto;

    const userExists = await this.usuarioRepository.findOne({ where: { email } });
    if (userExists) {
      throw new ConflictException('Este e-mail já está em uso.');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const usuario = this.usuarioRepository.create({ email, password: hashedPassword });

    try {
      await this.usuarioRepository.save(usuario);
      return usuario;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao salvar o usuário.');
    }
  }
}