export type LocationType = {
  id: number;
  name: string;
  address: string;
  image: string;
  totalSpaces: number;
};

export type UserReservation = {
  id: number;
  userId: number;
  localName: string;
  numberOfTables: number;
  dateTime: string;
  isConfirmed: boolean;
}
export type UserInfo = {
  id: number;
  name: string;
  userName: string;
  points: number;
  isManager: boolean;
}

export const API = new URL("http://localhost:8080/api");
