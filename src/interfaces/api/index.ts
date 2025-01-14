export interface ResponseApi<W> {
  success: boolean;
  message: string;
  data: W;
}