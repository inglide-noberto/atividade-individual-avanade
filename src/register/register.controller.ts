import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    @Post()
    async createClient(@Body() req){
        const { name, email, password, site, phone} = req;
        
        if(!name && !password){
            throw new HttpException('Por favor, insira nome e senha', HttpStatus.FORBIDDEN)
        }

        return this.registerService.createClient(name, email, password, site, phone);
    }
}
