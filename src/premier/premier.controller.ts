import { Controller, Get, Post ,Delete,Put,Patch} from '@nestjs/common';

@Controller('premier')
export class PremierController {
    @Get('test')
    callGet():String{
        return "Get called"
    }
    @Post('test')
    callPost():String{
        return "Post Called"
    }
    @Delete('test')
    callDelete():String{
        return "Delete Called"
    }
    @Put('test')
    callPut():String{
        return "Put Called"
    }
    @Patch('test')
    callPatch():String{
        return "Patch Called"
    }
}
