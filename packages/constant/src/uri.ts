const URIS = ["auth", "sign-in", "sign-up"] as const;
type UriKey = ToSnakeCase<(typeof URIS)[number]>;

type ToSnakeCase<T extends string> = T extends `${infer F}-${infer Rest}`
  ? ToSnakeCase<`${F}_${Rest}`>
  : Uppercase<T>;

export const URI = {} as Record<UriKey, string>;

const toSnakeCase = (str: string) => {
  const newStr = str.replace("-", "_");
  return newStr.toUpperCase();
};

for (let val of URIS) {
  URI[toSnakeCase(val) as UriKey] = `/${val}`;
}
