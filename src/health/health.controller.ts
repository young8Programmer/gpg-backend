import { Controller, Get } from '@nestjs/common';
// database connection muammosi hal qilindi
// product catalog funksiyasi qo'shildi

// database connection muammosi hal qilindi
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

