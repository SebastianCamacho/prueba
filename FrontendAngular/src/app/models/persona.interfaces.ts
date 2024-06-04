export interface Persona {
    _id?:              ID;
    DeletionDate?:     null;
    ModificationDate?: null;
    CreationDate?:     CreationDate;
    tipoDocumento?:    string;
    documento?:        string;
    nombre1?:          string;
    nombre2?:          string;
    apellido1?:        string;
    apellido2?:        string;
    fechaNacimiento?:  Date | CreationDate;
    sexo?:             string;
}

export interface CreationDate {
    $date?: Date;
}

export interface ID {
    $oid: string;
}

