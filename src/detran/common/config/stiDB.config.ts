
export class StiDB {

    constructor(
        readonly type: 'mssql' = 'mssql',
        readonly host: string = process.env.SIT_SERVER,
        readonly port: number = 1433,
        readonly username: string = process.env.SIT_USER,
        readonly password: string = process.env.SIT_PASSWORD,
        readonly databese = process.env.SIT_DB,
        readonly sync = false,
    ){ }
}