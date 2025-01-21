export interface User {
  id:        number;
  email:     string;
  name:      string;
  lastName:  string;
  roleId:    number;
  createdAt: Date;
  updatedAt: Date;
  storeId:   number;
  token:     string;
}