function setPhone(phoneNumber: string) {
  if (phoneNumber.startsWith("8")) {
    phoneNumber = "+7" + phoneNumber.slice(1);
  }

  return phoneNumber;
}
export default setPhone