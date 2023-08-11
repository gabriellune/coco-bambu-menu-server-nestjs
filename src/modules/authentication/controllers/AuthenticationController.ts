import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthenticationService } from '../services/AuthenticationService';
import { LoginDTO } from '../models/dtos/LoginDTO';
import { LoginResponse } from '../models/interfaces/LoginResponse';
import { SwaggerLoginResponse } from '../../../documentation/models/SwaggerLoginResponse';

@Controller('authentication')
@ApiTags('Authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('login')
  @ApiCreatedResponse({
    description: 'Logged successfully!',
    type: SwaggerLoginResponse,
  })
  @ApiOperation({ summary: 'Login to generate token' })
  login(@Body() payload: LoginDTO): Promise<LoginResponse> {
    return this.authenticationService.login(payload.userName, payload.password);
  }
}
