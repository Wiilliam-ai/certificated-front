import { toast } from 'react-toastify'
import { HttpAdapter } from './http-adapter'

class CustomError extends Error {
  constructor(message: string) {
    super(message)
  }
}

export class ApiFetch implements HttpAdapter {
  private static API_URL = 'http://localhost:3000'
  private maxToastError = 4
  private countToastError = 0
  private statusError: number = 0

  private async request<T>(url: string, options: RequestInit): Promise<T> {
    let resultData: T
    try {
      const response = await fetch(`${ApiFetch.API_URL}${url}`, options)
      const result: T = await response.json()

      if (!response.ok) {
        const existResult = result !== undefined
        if (existResult) {
          this.statusError = response.status
          throw new CustomError('Custom error')
        }
      }

      // Reiniciar contador de errores si la petición es exitosa
      this.countToastError = 0
      resultData = result
    } catch (error) {
      this.handleError(error)
      throw new Error('Error en la petición')
    }

    return resultData
  }

  private handleError(error: unknown): void {
    if (error instanceof CustomError) {
      console.log(
        `Implementar los toast de error para el status ${this.statusError}`,
      )
    }

    this.countToastError++
    if (this.countToastError === this.maxToastError) {
      toast.error('Error de conexión')
      this.countToastError = 0
    }
  }

  async get<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: 'GET' })
  }

  async post<T>(url: string, body: Record<string, unknown>): Promise<T> {
    return this.request<T>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  }

  async delete<T>(url: string): Promise<T> {
    return this.request<T>(url, { method: 'DELETE' })
  }

  async patch<T>(url: string, body: Record<string, unknown>): Promise<T> {
    return this.request<T>(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  }
}
