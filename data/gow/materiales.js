import { makeGetRequest } from "@utils/api/api";

export async function getMaterial() {
  try {
    const data = await makeGetRequest("getmaterial");
    return data;
  } catch (e) {
    throw e;
  }
}
