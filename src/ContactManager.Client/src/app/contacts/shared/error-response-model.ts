export class ErrorResponseModel {
  statusCode?: number;
  message: string;
  errors?: ValidationError[];
  stackTrace?: string;
}

class ValidationError {
  field: string;
  message: string;
}
