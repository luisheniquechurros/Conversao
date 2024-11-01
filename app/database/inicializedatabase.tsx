import { type SQLiteDatabase } from "expo-sqlite";

export async function inicializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(
        `
       

        CREATE TABLE IF NOT EXISTS historico (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo INTEGER,
            unidade_entrada TEXT,
            unidade_saida TEXT,
            valor_entrada REAL,
            valor_saida REAL
        );

        `
    );
}
