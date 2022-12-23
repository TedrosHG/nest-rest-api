import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    
    signin(){
        return 'i am signin'
    }
    signup(){
        return 'i am signup'
    }
}