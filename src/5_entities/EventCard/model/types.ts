export interface EventCategory {
  id: string;
  name: string;
  type: string;
  iconUrl: string;
}

export interface Role {
  id: string;
  name: string;
}

export interface Token {
  id: string;
  accessToken: string;
  refreshToken: string;
  loggedOut: boolean;
}

export interface Authority {
  authority: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
  roles: Role[];
  tokens: Token[];
  enabled: boolean;
  authorities: Authority[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  categories: EventCategory[];
  dateOfTheEvent: string;
  dateOfCreation: string;
  location: string;
  coordinates: Coordinates;
  creator: User;
  participants: User[];
}
