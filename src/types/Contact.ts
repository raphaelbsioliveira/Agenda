export interface Phone {
  id: string;
  number: string;
}

export interface Address {
  id: string;
  street: string;
  city: string;
}

export interface Contact {
  id: string;
  name: string;
  email?: string;
  phones: Phone[];
  addresses: Address[];
}
