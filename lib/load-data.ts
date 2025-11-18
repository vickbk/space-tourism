import data from "@utils/starter-code/data.json";
export type dataTypes = keyof typeof data;

// export const loadData = (index: dataTypes): (typeof data)[dataTypes] => {
//   return data[index] as (typeof data)[dataTypes];
// };
export const loadData = <T extends dataTypes>(index: T): (typeof data)[T] => {
  return data[index] as (typeof data)[T];
};
