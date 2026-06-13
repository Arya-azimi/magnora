import { sql } from "@vercel/postgres";

interface ExecuteQueryArgs {
  query: string;
  values?: any[];
}

export async function executeQuery<T>({
  query,
  values = [],
}: ExecuteQueryArgs): Promise<T> {
  try {
    let pgQuery = query;
    values.forEach((_, index) => {
      pgQuery = pgQuery.replace("?", `$${index + 1}`);
    });

    const { rows } = await sql.query(pgQuery, values);
    return rows as unknown as T;
  } catch (error: any) {
    console.error("Database Error:", error.message);
    throw new Error(`Database Error: ${error.message}`);
  }
}
