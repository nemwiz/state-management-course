import { ShopingCartItem } from './shoping-cart-item';
import { User } from './user';
import { Notification } from './notifications';

export class AppStore {
  user: User;
  notifications: Notification[];
  products: ShopingCartItem[];
}
