import { Perfiles } from "../interfaces/perfiles.interface";

export const initProfiles = () =>{
    var listProfiles: Perfiles[] = [
        {
            id: 0,
            name: "Paco",
            age: 20,
            desc: "Esto es una prueba de Paco"
        },
        {
            id: 1,
            name: "Emilio",
            age: 20,
            desc: "Esto es una prueba de Emilio"
        },
        {
            id: 2,
            name: "Manuel",
            age: 34,
            desc: "Esto es una prueba de Manuel"
        },
        {
            id: 3,
            name: "Julia",
            age: 5,
            desc: "Esto es una prueba de Julia"
        },
    ];
    return listProfiles;
};