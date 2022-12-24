import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    signin(){
        return 'i am signin'
    }
    signup(){
        return 'i am signup'
    }
}