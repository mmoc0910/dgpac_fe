import { SelectCountries } from "@/components/common/SelectCountries";
import { AppIcons, Button, Input, InputSelectFile } from "@/elements";
import { uploadService, userRequestService } from "@/lib/api-services";
import { cn } from "@/lib/utils";
import { emailValidate, nameValidate, phoneValidate } from "@/lib/validate";
import React, { useEffect, useRef, useState } from "react";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";

type ContactFormValues = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  location: string;
  request: string;
  safetyDataSheet?: File | null;
  packingList?: File | null;
};

export function ContactUS() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showForm, setshowForm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();
  console.log("errors ~ ", errors);
  useEffect(() => {
    if (isSuccess) {
      timeoutRef.current = setTimeout(() => {
        setIsSuccess(false);
        reset({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          location: "",
          request: "",
          safetyDataSheet: null,
          packingList: null,
        });
        setshowForm(false);
      }, 3000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isSuccess, reset]);

  const onSubmit: SubmitHandler<ContactFormValues> = async (payload) => {
    // console.log("payload ~ ", payload);
    try {
      let safetyDataSheet = "";
      let packingList = "";

      if (payload?.safetyDataSheet) {
        const response = await uploadService.uploadFile(
          payload?.safetyDataSheet
        );
        safetyDataSheet = response.data.path;
      }
      if (payload?.packingList) {
        const response = await uploadService.uploadFile(payload?.packingList);
        packingList = response.data.path;
      }

      await userRequestService.submit({
        ...payload,
        safetyDataSheet,
        packingList,
      });
      setIsSuccess(true);
      // reset({
      //   name: "",
      //   companyName: "",
      //   email: "",
      //   phone: "",
      //   location: "",
      //   request: "",
      //   safetyDataSheet: null,
      //   packingList: null,
      // });
      // setshowForm(false);
    } catch (error) {
      throw new Error(`can not submit contact: ${error}`);
    }
  };

  return (
    <div id="contact" className="md:bg-[url(/images/IMG_2239.jpg)] bg-cover">
      <div className="p-4 lg:p-16 xl:px-28 xl:py-16 lg:bg-[rgba(0, 0, 0, 0.5)] lg:backdrop-blur-sm gap-6 flex md:flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-[520px] xl:w-[445px] bg-primary rounded-[10px] p-8 lg:p-10 xl:p-[60px] flex items-center justify-center">
          <div className="space-y-8 lg:space-y-6">
            <h2 className="font-oswald font-bold text-4xl text-warning500">
              Why DGpac?
            </h2>
            <div className="flex items-start gap-3">
              <div className="shrink-0">
                <AppIcons name="check-circle" size={32} color="#F5B30B" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                UN-Certified Packaging <br />
                100% compliance, tested, and ready to use
              </h3>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0">
                <AppIcons name="cost" size={32} color="#F5B30B" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Cost-Effective
                <br /> Competitive pricing while maintaining top-tier services
              </h3>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0">
                <AppIcons name="20-years" size={32} color="#F5B30B" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Trusted DG Expertise <br />
                20 years of safe DG handling with a continued commitment to
                excellence
              </h3>
            </div>
            <div className="flex items-center justify-center md:hidden">
              <button
                className="font-bold text-xl px-4 py-2 rounded-[10px] bg-white text-primary500"
                onClick={() => setshowForm(true)}
              >
                SEND A REQUEST
              </button>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "space-y-6 lg:block transition duration-300",
            showForm
              ? "max-md:fixed overflow-y-auto max-md:z-40 max-md:inset-0 max-md:top-11 max-md:bg-primary60 max-md:p-8 max-md:space-y-3 max-md:opacity-100"
              : "max-md:hidden max-md:opacity-0 max-md:inset-10"
          )}
        >
          <div className="">
            <h2 className="font-oswald font-medium text-xl md:text-4xl text-white">
              Looking for the right DG packaging & declaration?
            </h2>
            <p className="font-oswald text-lg md:text-[28px] text-warning500 font-medium">
              Submit this form and our DG expert will be in touch shortly!
            </p>
            <div className="w-[50px] my-3 border-b-2 border-b-primary500 md:border-b-primary"></div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-x-3 gap-y-6 md:gap-6"
          >
            <Input
              name="name"
              control={control as unknown as Control<FieldValues>}
              rules={{
                required: { value: true, message: "Required" },
                pattern: { value: nameValidate, message: "Invalid" },
              }}
              placeholder="Your Name"
            />
            <Input
              name="companyName"
              control={control as unknown as Control<FieldValues>}
              rules={{
                required: { value: true, message: "Required" },
              }}
              placeholder="Company Name"
            />
            <Input
              name="email"
              type="email"
              control={control as unknown as Control<FieldValues>}
              rules={{
                required: { value: true, message: "Required" },
                pattern: { value: emailValidate, message: "Invalid" },
              }}
              placeholder="Email"
            />
            <Input
              name="phone"
              control={control as unknown as Control<FieldValues>}
              rules={{
                required: { value: true, message: "Required" },
                pattern: { value: phoneValidate, message: "Invalid" },
              }}
              placeholder="Phone"
            />
            <SelectCountries
              name="location"
              control={control as unknown as Control<FieldValues>}
              rules={{ required: { value: true, message: "Required" } }}
              placeholder="Your location"
              describe="(by Country)"
              containerClassname="col-span-2"
            />
            <Input
              name="request"
              control={control as unknown as Control<FieldValues>}
              rules={{ required: { value: true, message: "Required" } }}
              placeholder="Your request"
              containerClassname="col-span-2"
            />
            <InputSelectFile
              name="safetyDataSheet"
              control={control as unknown as Control<FieldValues>}
              placeholder="Safety Data Sheet"
              containerClassname="col-span-1"
            />
            <InputSelectFile
              name="packingList"
              control={control as unknown as Control<FieldValues>}
              placeholder="Packing List"
              containerClassname="col-span-1"
            />
            <div className="col-span-2">
              {isSuccess ? (
                <div className="p-4 bg-background rounded-[10px] flex items-start gap-2">
                  <div className="size-6 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                    <AppIcons name="check" className="text-white size-4" />
                  </div>
                  <p className="font-medium text-green-600 text-base">
                    Thank you! We&#39;re received your information and will be
                    in touch soon
                  </p>
                </div>
              ) : (
                <ul className="max-md:text-sm font-semibold text-white list-disc pl-5">
                  <li>All information provided will remain confidential</li>
                  <li>
                    (<span className="text-primary">*</span>) is required field
                  </li>
                </ul>
              )}
            </div>
            <div className="max-md:flex max-md:justify-center max-md:col-span-2">
              <Button type="submit" className="hover:bg-[#540A0D]">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
