export interface HttpAdapter {
  get: <T>(url: string) => Promise<T>
  post: <T>(url: string, body: Record<string, unknown>) => Promise<T>
  patch: <T>(url: string, body: Record<string, unknown>) => Promise<T>
  delete: <T>(url: string) => Promise<T>
}
