import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import axios from "axios";
type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {phone} =  JSON.parse(req.body);
    var data = new FormData();
    data.append("public_key", "744cb76af68fdda89673169cb24673ed");
    data.append("phone", phone);
    data.append("campaign_id", "467784382");

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://zvonok.com/manager/cabapi_external/api/v1/phones/flashcall/",
      headers: {
        ...data.getHeaders(),
      },
      data: data,
    };

    const response = await axios(config);

    return res.json({
      code: response.data.data.pincode,
    });
  } catch (error) {
    console.log(error);
  }
}
