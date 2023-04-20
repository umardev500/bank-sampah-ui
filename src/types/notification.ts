export interface Notification {
  name: 'transfer' | 'received' | 'pln' | 'credit';
  status: 'read' | 'unread';
}
