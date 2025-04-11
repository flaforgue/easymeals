export interface House {
  name: string;
  id: string;
}

export interface UserHouse {
  name: string;
  id: string;
  joinKey: string;
  defaultNbPortions: number;
  users: {
    name: null | string;
    id: string;
  }[];
}
