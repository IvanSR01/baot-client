export type TypeRegister = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  paymentInfo?: any;
  personalUrl?: string;
  password: string;
  confirm: string;
  code: string;
	login: string
};

export type TypeStoreRegister = {
  data: TypeRegister;
};

export type TypeLogin = {
  phoneOrMail: string;
  password: string;
};

export type TypeStoreLogin = {
  data: {
    phoneOrMail: string;
    password: string;
    confirm: string;
    code: string;
  };
};

export type TypeCheckPhone = {
  code: string;
  role?: string;
};

export type TypeChangePassword = {
  phoneOrMail: string;
  password: string;
  confirm: string;
};

export type TypeHasUser = {
  phone: string;
  email: string;
};
