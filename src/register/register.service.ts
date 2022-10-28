import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
    async createClient( name: string, email: string, password: string, site: string, phone: string){
        return `Cliente ${name} cadastrado com sucesso!`
    }
}
