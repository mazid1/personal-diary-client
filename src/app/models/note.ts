import {Category} from './category';
import {User} from './user';

export class Note {
  id: number;
  title: string;
  description: string;
  category: Category;
  user: User;
  date: Date;
}
