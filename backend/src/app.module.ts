import { Module } from '@nestjs/common';
import { CoinModule } from './coins/coin.module';

@Module({
    imports: [CoinModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
