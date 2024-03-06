import { Fa500Px } from "react-icons/fa";

export const loginUser: TypeData[] = [
  {
    name: "name",
    svg: "FaUserAlt" as TypeMaterialIconName,
    placeholder: "Имя",
  },
  {
    name: "surname",
    svg: "FaEnvelope" as TypeMaterialIconName,
    placeholder: "Фамилия",
  },
  {
    name: "phone",
    svg: "FaPhone" as TypeMaterialIconName,
    placeholder: "Телефон",
  },
  {
    name: "email",
    svg: "FaEnvelope" as TypeMaterialIconName,
    placeholder: "Email",
  },
  {
    name: "password",
    svg: "FaEye" as TypeMaterialIconName,
    placeholder: "Пароль",
  },
  {
    name: "confirm",
    svg: "FaEye" as TypeMaterialIconName,
    placeholder: "Повторить пароль",
  },
];
export const loginSeller: TypeData[] = [
  {
    name: "name",
    svg: "FaUserAlt" as TypeMaterialIconName,
    placeholder: "Имя",
  },
  {
    name: "surname",
    svg: "FaEnvelope" as TypeMaterialIconName,
    placeholder: "Фамилия",
  },
  {
    name: "phone",
    svg: "FaPhone" as TypeMaterialIconName,
    placeholder: "Телефон",
  },
  {
    name: "email",
    svg: "FaEnvelope" as TypeMaterialIconName,
    placeholder: "Email",
  },
  {
    name: "password",
    svg: "FaEye" as TypeMaterialIconName,
    placeholder: "Пароль",
  },
  {
    name: "confirm",
    svg: "FaEye" as TypeMaterialIconName,
    placeholder: "Повторить пароль",
  },  {
    name: "surname",
    svg: "FaLink" as TypeMaterialIconName,
    placeholder: "URL личной страницы",
  },
];

type TypeData = {
  name: string;
  svg: TypeMaterialIconName;
  placeholder: string;
};

type TypeMaterialIconName =
  | "Fa500Px"
  | "FaAccessibleIcon"
  | "FaPhone"
  | "FaEnvelope"
  | "FaLock";
