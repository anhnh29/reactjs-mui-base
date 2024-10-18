export interface IAuthInfo {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  jwtToken: string;
  role: string;
  permissions: string[] | null;
  refreshToken: string;
}
