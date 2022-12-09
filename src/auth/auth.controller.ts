import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

    @Post('signup')
    signup(@Req() req: Request) {
        const result = req.body
        return result
    }
    
    @Post('signin')
    signin() {}

}
