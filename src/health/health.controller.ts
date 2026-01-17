import { Controller, Get } from '@nestjs/common';
// database connection muammosi hal qilindi
// product catalog funksiyasi qo'shildi

@Controller()
export class HealthController {
  @Get()
  health() {
    return {
      status: 'ok',
      message: 'GPG Backend API is running',
      timestamp: new Date().toISOString(),
    };
  }
}

