import { Resolver, Query } from "@nestjs/graphql"
@Resolver()
export class CatsResolver {
    @Query(() => String)
    async hello() {
        return 'hello';
    }
}