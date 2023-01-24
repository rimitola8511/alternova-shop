import data from "../../../data.json";

export const get = async <T>() => {
  return data as T;
};
