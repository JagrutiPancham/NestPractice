import { Controller ,Get, Post} from "@nestjs/common";

@Controller('/user')
export class AppController {
    @Get()
getUser()
{
    return {name:'sakshi',
            email:'sakshipancham@gmail.com',
            contact:'9960759675'}
}

@Post()
store(){
    return 'I am storing data into database'
}
}