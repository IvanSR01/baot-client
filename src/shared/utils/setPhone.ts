function setPhone(phoneNumber: string) {
  // Удаляем все символы, кроме цифр
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

  // Добавляем международный код, если номер начинается с "8" и имеет девять цифр
  if (cleanedPhoneNumber.startsWith("8") && cleanedPhoneNumber.length === 10) {
    return "+7" + cleanedPhoneNumber.slice(1);
  }
  // console.log(phoneNumber, cleanedPhoneNumber);

  if (cleanedPhoneNumber.startsWith("+7")) return cleanedPhoneNumber;
  // Удаляем начальный "+" и добавляем международный код, если его нет
  if (
    !cleanedPhoneNumber.startsWith("+") &&
    cleanedPhoneNumber.charAt(2) !== "7"
  ) {
    return "+7" + cleanedPhoneNumber.slice(1);
  } else {
    return "+" + cleanedPhoneNumber;
  }
}

export default setPhone;
