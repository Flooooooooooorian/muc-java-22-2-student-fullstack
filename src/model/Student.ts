
export type Student = {
    id: string
    name: string
    gender: Gender
}

export type NewStudent = {
    name: string
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    DIVERS = "DIVERS"
}
