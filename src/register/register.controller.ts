import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { createRegisterDTO } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    @Post()
    async createClient(@Body() req: createRegisterDTO){
        return this.registerService.createClient(req)        
    }
}
