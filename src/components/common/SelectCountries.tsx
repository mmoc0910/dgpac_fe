import { ISelectInputProps, SelectInput } from "@/elements";
import axios from "axios";
import * as React from "react";

export type TSelectCountriesProps = Omit<ISelectInputProps, "data">;

export function SelectCountries(props: TSelectCountriesProps) {
  const [countries, setCountries] = React.useState<string[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const res = await axios.get<{ name: { common: string } }[]>(
          "https://restcountries.com/v3.1/all?fields=name"
        );
        setCountries(res?.data?.map((item) => item.name.common));
      } catch (error) {
        throw new Error(`can not fetch country list: ${error}`);
      }
    })();
  }, []);
  return (
    <SelectInput
      {...props}
      data={countries.map((item) => ({ id: item, label: item}))}
    />
  );
}
