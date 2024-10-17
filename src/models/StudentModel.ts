import { HttpAdapter } from '../plugins/http/http-adapter'
import { Student } from '../stores/students/useStudentStore'

export class StudentModel {
  constructor(private readonly http: HttpAdapter) {}

  async loadStudents() {
    const result = await this.http.get<Student[]>('/students')
    return result
  }
}
