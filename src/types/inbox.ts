import { ImageSourcePropType } from 'react-native';

export interface Inbox {
  name: string;
  avatar: ImageSourcePropType;
  text: string;
  createdAt: string;
  status: 'read' | 'unread';
}
