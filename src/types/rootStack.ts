export interface TopUpValueParams {
  vendor: string;
}

export type RootStack = {
  main: undefined;
  paymentMethod: undefined;
  bankList: undefined;
  topUpValue: TopUpValueParams;
};
