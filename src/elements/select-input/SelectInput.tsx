import { cn } from "@/lib/utils";
import * as React from "react";
import { useController, UseControllerProps } from "react-hook-form";

export type TSelectInputData = { id: string; label: string };

export type ISelectInputProps = {
  placeholder?: string;
  describe?: string;
  containerClassname?: string;
  data: TSelectInputData[];
} & UseControllerProps;
export function SelectInput({
  placeholder,
  describe,
  containerClassname = "",
  data,
  ...useControllerProps
}: ISelectInputProps) {
  console.log("data countries ~ ", data);
  const [open, setOpen] = React.useState<boolean>(false);
  const [searchText, setSearchText] = React.useState<string>("");

  const filteredCountries = React.useMemo(() => {
    if (!searchText) return data;
    return data
      .sort((a, b) => a.label.localeCompare(b.label))
      .filter((item) =>
        item.label.toLowerCase().startsWith(searchText.toLowerCase())
      );
  }, [data, searchText]);

  const {
    field,
    fieldState: { error },
  } = useController(useControllerProps);

  const handleChange = (value: string) => {
    field.onChange(value);
    setSearchText(value);
    toogleShowOptions();
  };
  const toogleShowOptions = () => setOpen(!open);
  return (
    <div className={containerClassname}>
      <div className="relative">
        <div
          onClick={toogleShowOptions}
          className={cn(
            "p-4 rounded-[10px] bg-background font-bold cursor-pointer",
            error?.message && "border-2 border-primary"
          )}
        >
          <div className="relative w-full">
            <input
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                if (!open) toogleShowOptions();
              }}
              className="outline-none w-full peer text-base md:text-lg"
              type={"text"}
            />
            {placeholder && !field.value && !searchText && (
              <div className="bg-backgroundd text-base md:text-lg line-clamp-1 text-neutral400 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none peer-focus:hidden">
                {placeholder}
                {useControllerProps?.rules?.required && (
                  <span className="text-primary">*</span>
                )}
              </div>
            )}
          </div>

          {describe && (
            <span className="text-xs text-primary font-normal">{describe}</span>
          )}
        </div>
        <div
          className={cn(
            "rounded-[10px] bg-background w-full absolute z-[21] left-0 top-[calc(100%+4px)] shadow max-h-52 overflow-y-scroll no-scrollbar",
            open ? "block" : "hidden"
          )}
        >
          {searchText && filteredCountries?.length <= 0 ? (
            <p className="text-gray-500 p-4">No matching results found</p>
          ) : (
            <>
              {filteredCountries?.map((item) => {
                const selected = field.value === item.id;
                return (
                  <div
                    className={cn(
                      "first:rounded-t-[10px] last:rounded-b-[10px] px-4 py-2 font-semibold hover:bg-primary500 hover:text-white cursor-pointer",
                      selected && "bg-primary500 text-white"
                    )}
                    key={item.id}
                    onClick={() => handleChange(item.id)}
                  >
                    {item.label}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>

      {error?.message && (
        <p className="text-primary text-sm font-semibold">{error?.message}</p>
      )}
    </div>
  );
}
