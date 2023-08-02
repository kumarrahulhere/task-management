export default interface IRequestStatus {
  loading: boolean;
  success: boolean | null;
  message?: string | null;
  data?: any | null;
  errors?: any | null;
  [key: string]: any;
}
