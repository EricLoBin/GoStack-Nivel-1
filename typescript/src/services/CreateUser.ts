/**
 * Para criar: nome, email, password
 */

interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;// nome opcional
    email: string;
    password: string;
    techs: Array<string | TechObject>;// arrays podem ser tambem "string[]"
}

export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user;
}