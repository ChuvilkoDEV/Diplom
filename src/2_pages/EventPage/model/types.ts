// Определение типа для категории
export interface Category {
  id: string;
  name: string;
  type: 'topic';
  iconUrl: string;
}

// Определение типа для координат
interface Coordinates {
  x: number;
  y: number;
}

// Определение типа для ролей
interface Role {
  id: string;
  name: string;
}

// Определение типа для города
interface City {
  id: string;
  name: string;
}

// Определение типа для интересов
interface Interest {
  id: string;
  name: string;
  type: 'topic';
  iconUrl: string;
}

// Определение типа для пользователя (создателя и участников)
export interface User {
  id: string;
  email: string;
  description: string;
  age: number;
  username: string;
  password: string;
  roles: Role[];
  chosenCity: City;
  favoriteInterests: Interest[];
  dislikedInterests: Interest[];
  enabled: boolean;
  authorities: { authority: string }[];
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}

// Определение типа для события
export interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  categories: Category[];
  dateOfEventType: 'looped';
  dateOfTheEvent: string[];
  dateOfCreation: string;
  location: string;
  coordinates: Coordinates;
  creator: User;
  participants: User[];
}

// Определение типа для массива событий
export type EventsArray = Event[];
