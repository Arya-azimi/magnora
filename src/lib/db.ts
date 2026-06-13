import mysql from 'mysql2/promise';

// ایجاد یک Pool برای مدیریت بهینه و خودکار کانکشن‌ها
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // حداکثر تعداد کانکشن‌های همزمان
  queueLimit: 0,
});

// تعریف اینترفیس برای آرگومان‌های ورودی تابع
interface ExecuteQueryArgs {
  query: string;
  values?: any[];
}

// استفاده از Generics (<T>) برای اینکه خروجی تابع دیتای تایپ‌شده مشخص داشته باشه
export async function executeQuery<T>({ query, values = [] }: ExecuteQueryArgs): Promise<T> {
  try {
    const [results] = await pool.execute(query, values);
    return results as T;
  } catch (error: any) {
    throw new Error(`Database Error: ${error.message}`);
  }
}