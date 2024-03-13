export const patterns: TypePatterns = {
  phone: {
    value: /\s?\(?\d{3}\)?-?\d{2}-?\d{2}/,
    message: "Некорректный формат телефона",
  },
  email: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Некорректный формат email",
  },
};

type TypePatterns = {
  [key: string]: {
    value: RegExp;
    message: string;
  };
};
