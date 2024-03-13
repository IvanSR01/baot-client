import zxcvbn from "zxcvbn";

export const useCheckPassword = (
  password: string,
  confirm: string,
  setState: (e: string) => void
) => {
  if (password !== confirm) return setState("Пароли не совпадают");
  const result = zxcvbn(password);
  switch (result.score) {
    case 0:
      setState("Очень слабый пароль");
      break;
    case 1:
      setState("Cлабый пароль");
      break;
    case 2:
      setState("Cредний пароль");
      break;
  }
};
