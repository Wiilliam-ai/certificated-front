import { toast } from 'react-toastify'
import { HttpAdapter } from './http-adapter'

class CustomError extends Error {
  constructor(message: string) {
    super(message)
  }
}

export class ApiFetch implements HttpAdapter {
  private static API_URL = 'http://localhost:3000'
  private maxToastError = 2
  private countToastError = 0

  async get<T>(url: string): Promise<T> {
    let resultData: T
    try {
      const response = await fetch(`${ApiFetch.API_URL}${url}`)
      const result: T = await response.json()
      if (!response.ok) {
        throw new CustomError('Error custom')
      }
      resultData = result
      this.countToastError = 0
    } catch (error) {
      if (error instanceof CustomError) {
        console.log('Error custom')
        throw error
      }
      // toast.error('Error en la petición')

      if (this.countToastError < this.maxToastError) {
        toast.error('Error en la petición')
        this.countToastError++
      }

      throw new Error('Error en la petición')
    }
    return resultData
  }

  async post<T>(url: string, body: Record<string, unknown>): Promise<T> {
    let resultData: T

    try {
      const response = await fetch(`${ApiFetch.API_URL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const result: T = await response.json()

      if (!response.ok) {
        throw new CustomError('Error custom')
      }
      resultData = result
      this.countToastError = 0
    } catch (error) {
      if (error instanceof CustomError) {
        console.log('Error custom')
        throw error
      }

      if (this.countToastError < this.maxToastError) {
        toast.error('Error en la petición')
        this.countToastError++
      }

      throw new Error('Error en la petición')
    }

    return resultData
  }

  async delete<T>(url: string): Promise<T> {
    let resultData: T

    try {
      const response = await fetch(`${ApiFetch.API_URL}${url}`, {
        method: 'DELETE',
      })
      const result: T = await response.json()

      if (!response.ok) {
        throw new CustomError('Error custom')
      }

      resultData = result
      this.countToastError = 0
    } catch (error) {
      if (error instanceof CustomError) {
        console.log('Error custom')
        throw error
      }

      if (this.countToastError < this.maxToastError) {
        toast.error('Error en la petición')
        this.countToastError++
      }

      throw new Error('Error en la petición')
    }

    return resultData
  }

  async patch<T>(url: string, body: Record<string, unknown>): Promise<T> {
    let resultData: T

    try {
      const response = await fetch(`${ApiFetch.API_URL}${url}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
      const result: T = await response.json()

      if (!response.ok) {
        throw new CustomError('Error custom')
      }

      resultData = result
      this.countToastError = 0
    } catch (error) {
      if (error instanceof CustomError) {
        console.log('Error custom')
        throw error
      }

      if (this.countToastError < this.maxToastError) {
        toast.error('Error en la petición')
        this.countToastError++
      }

      throw new Error('Error en la petición')
    }

    return resultData
  }
}
