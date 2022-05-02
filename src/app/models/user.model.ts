import { UserMove } from "./user-move.model"

export interface User {
    name: string
    coins: number
    moves: UserMove[]
}
