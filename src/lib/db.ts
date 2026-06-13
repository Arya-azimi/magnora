// فایل موقت فقط برای فریب دادن بیلد اول ورسل

interface ExecuteQueryArgs {
  query: string;
  values?: any[];
}

export async function executeQuery<T>({
  query,
  values = [],
}: ExecuteQueryArgs): Promise<T> {
  console.log("Bypassing database during build...");

  // یک آرایه خالی برمی‌گردانیم تا روت‌های داینامیک موقع بیلد کرش نکنند
  return [] as unknown as T;
}
