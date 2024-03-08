import { $axios } from "@/$api/axios.api";
import { getTokens, saveTokens } from "@/$api/tokens.api";
import { TypeChangePassword, TypeCheckPhone, TypeLogin, TypeRegister } from "@/shared/types/auth.type";
import { IUser } from "@/shared/types/user.type";

class AuthService {
  private saveNewToken(data: IUser) {
    if (data.accessToken) {
      saveTokens({
        accessToken: data.accessToken,
        refreshToken: data.accessToken,
      });
    }
  }
  async getCode(phone: string): Promise<TypeCheckPhone> {
    const res = await $axios.post<TypeCheckPhone>("/auth/get-code", {
      phone,
    });
    return res.data;
  }

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
		console.log(props)
    return data;
  }

  async hasUser(phone: string, email: string) {
    const { data } = await $axios.post("/auth/has-user", {
      phone,
      email,
    });
    return data;
  }
}

export default new AuthService();
