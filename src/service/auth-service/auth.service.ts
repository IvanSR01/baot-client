import { $axios } from "@/$api/axios.api";
import { getTokens, saveTokens } from "@/$api/tokens.api";
import {
  TypeChangePassword,
  TypeCheckPhone,
  TypeLogin,
  TypeRegister,
} from "@/shared/types/auth.type";
import { IUser } from "@/shared/types/user.type";
import axios, { AxiosRequestConfig } from "axios";
import FormData from "form-data";
class AuthService {
  private readonly data: FormData;
  constructor() {
    this.data = new FormData();
  }
  async flashCall(phone: string) {
    this.data.append("public_key", "744cb76af68fdda89673169cb24673ed");
    this.data.append("phone", phone);
    this.data.append("campaign_id", "467784382");

    const requestOptions: any = {
      method: "POST",
      body: this.data,
      redirect: "follow",
    };

    const response = await fetch(
      "https://zvonok.com/manager/cabapi_external/api/v1/phones/flashcall/",
      requestOptions
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.data.pincode;
  }
  private saveNewToken(data: IUser) {
    if (data.accessToken) {
      saveTokens({
        accessToken: data.accessToken,
        refreshToken: data.accessToken,
      });
    }
  }
  // async getCode(phone: string): Promise<TypeCheckPhone> {
  //   const res = await $axios.post<TypeCheckPhone>("/auth/get-code", {
  //     phone,
  //   });
  //   return res.data;
  // }

  async login(props: TypeLogin) {
    const { data } = await $axios.post<IUser>("/auth/login", { ...props });

    this.saveNewToken(data);

    return data;
  }

  async userRegistration(props: TypeRegister) {
    const { data } = await $axios.post<IUser>("/auth/registration-seller", {
      ...props,
    });

    this.saveNewToken(data);

    return data;
  }

  async sellerRegistration(props: TypeRegister) {
    const { data } = await $axios.post<IUser>("/auth/registration-user", {
      ...props,
    });

    this.saveNewToken(data);

    return data;
  }

  async getNewTokens() {
    const { refreshToken } = getTokens();
    const { data } = await $axios<IUser>({
      url: `/login/get-new-tokens`,
      method: "post",
      data: { refreshToken },
    });
    this.saveNewToken(data);
    return data;
  }

  async changePassword(props: TypeChangePassword) {
    const { data } = await $axios.post("/auth/change-password", { ...props });
    console.log(props);
    return data;
  }

  async hasUser(phone: string, email: string, isReset?: boolean) {
    const { data } = await $axios.post("/auth/has-user", {
      phone,
      email,
			isReset
    });
    return data;
  }
  async getCode() {}
}

export default new AuthService();
