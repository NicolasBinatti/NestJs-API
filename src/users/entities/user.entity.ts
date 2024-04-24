import {Entity} from "typeorm";

@Entity({
    name: 'users'
})

export class User {
    id: number
    name: string
    email: string
    password: string
}
