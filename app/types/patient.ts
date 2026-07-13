export interface Patient {
  id: number;
  unique: string;
  firstname: string;
  lastname: string;
  dob: string;
  gender: string;
  reg_date: string;
}

export interface Vital {
  id: number;
  patient_id: number;
  visit_date: string;
  height: number;
  weight: number;
  bmi: number;
}

export interface Visit {
  id?: number;
  patient_id: number;
  vital_id: number;
  visit_date: string;
  general_health: string;
  on_diet: string;
  on_drugs: string;
  comments: string;
}