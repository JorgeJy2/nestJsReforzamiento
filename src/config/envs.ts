
import 'dotenv/config';

// TODO: Validar esquema


import * as joi from 'joi';


interface EnvVars   {
    PORT: number
}

const envSchema  = joi.object(
    {
        PORT: joi.number().required()

    }
).unknown(true);

const {error, value} = envSchema.validate(process.env);

const envVars: EnvVars = value;

// console.error(error);
// console.log(envVars);


if(error) {
    throw new Error(`Config validation error: ${error.message}`);
}

//envVars Para que case la trasformación 
export const envs = {
    port: envVars.PORT,
}