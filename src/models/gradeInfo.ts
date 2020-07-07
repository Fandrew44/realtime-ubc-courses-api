export default interface GradeInfo {
  grades: {
    "0-9%": number,
    "10-19%": number,
    "20-29%": number,
    "30-39%": number,
    "40-49%": number,
    "<50%": number,
    "50-54%": number,
    "55-59%": number,
    "60-63%": number,
    "64-67%": number,
    "68-71%": number,
    "72-75%": number,   
    "76-79%": number,
    "80-84%": number,
    "85-89%": number,
    "90-100%": number
  },
  stats: {
    "average": 74.57,
    "stdev": 15.08,
    "high": 100.0,
    "low": 25.0,
    "pass": 154,
    "fail": 15,
    "withdrew": 8,
    "audit": 0,
    "other": 10
  },
  id: string,
  yearsession: string,
  campus: string,
  year: number,
  session: string,
  subject: string,
  course: string,
  section: string,
  title: string,
  instructor: string,
  enrolled: number
}