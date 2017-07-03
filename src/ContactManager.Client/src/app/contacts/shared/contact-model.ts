export class ContactModel {
  id?: number;
  firstName: string;
  lastName: string;
  street?: string;
  city?: string;
  zipCode?: string;
  phoneNumber?: string;
  email: string;
  groups: number[];
}
