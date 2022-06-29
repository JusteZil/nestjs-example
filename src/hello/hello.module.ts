import { Module } from '@nestjs/common';

import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController],
  // When several implementations of provider available, use string provider tokens
  providers: [HelloService],
})
export class HelloModule {}
