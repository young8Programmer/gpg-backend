import { Controller, Get } from '@nestjs/common';
// componentlarni qayta tashkilash
// database connection muammosi hal qilindi
// product catalog funksiyasi qo'shildi

// database connection muammosi hal qilindi
// kod uslubini yaxshilash
// API hujjatlarini qo'shish
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

