import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
    async createClient( req){
        return `Cliente ${req.name} cadastrado com sucesso!`
    }
}
