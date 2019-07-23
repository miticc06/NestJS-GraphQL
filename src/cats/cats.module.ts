import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.schema';
import { CatsService } from './cats.service';
@Module({
    providers: [CatsResolver, CatsService],
    imports: [
        MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])
    ]
})
export class CatsModule { }
