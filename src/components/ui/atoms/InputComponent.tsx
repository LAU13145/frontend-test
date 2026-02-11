"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { Input, InputProps } from "@heroui/react";
import { ReactNode, useState } from "react";

interface InputComponentProps extends InputProps {
  description?: ReactNode;
  endContent?: ReactNode;
  errorMessageRegex?: string;
  errorMessageRequired?: string;
  errorMessageMaxLength?: string;
  isClearable?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isSuccess?: boolean;
  label: string;
  labelPlacement: "inside" | "outside" | "outside-left" | "outside-top";
  maxLength?: number;
  minLength?: number;
  // eslint-disable-next-line no-unused-vars
  onValueChange: (_value: string) => void;
  placeholder?: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  regex: RegExp;
  size: InputSize;
  startContent?: ReactNode;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "file"
    | "date"
    | "range"
    | "time";
  value: string;
}

type InputSize = "sm" | "md" | "lg";

const sizeStyles: Record<InputSize, string> = {
  sm: "h-11 p-3 text-sm",
  md: "h-[46px] p-3 text-base",
  lg: "h-12 p-3 text-base",
};

export const InputComponent = ({
  description,
  endContent,
  errorMessageRegex,
  errorMessageRequired,
  errorMessageMaxLength,
  isClearable = false,
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  isRequired = false,
  isSuccess = false,
  label,
  labelPlacement = "outside-top",
  maxLength,
  minLength,
  onValueChange,
  placeholder,
  radius = "sm",
  regex,
  size,
  startContent,
  type,
  value,
  ...props
}: InputComponentProps) => {
  const [touched, setTouched] = useState<boolean>(false);

  // Validate errors states
  const isRegexInvalid = regex && value ? !regex.test(value) : false;
  const isRequiredInvalid = isRequired && touched && value.trim() === "";
  const isMaxLengthInvalid =
    maxLength !== undefined && value.length > maxLength;

  const hasError = Boolean(
    isInvalid || isRegexInvalid || isRequiredInvalid || isMaxLengthInvalid
  );

  const validationErrorMessage = (() => {
    if (isMaxLengthInvalid) return errorMessageMaxLength;

    if (isRegexInvalid) return errorMessageRegex;

    if (isRequiredInvalid) return errorMessageRequired;

    return undefined;
  })();

  // Define class names based on state
  const classNames = {
    base: "",
    label: `after:ms-0! after:content-[''] font-bold text-sm after:text-transparent ${hasError ? "!text-error-200" : isDisabled ? "!text-greyscale-100" : isSuccess ? "!text-success400" : "!text-greyscale300"}`,
    mainWrapper: "",
    inputWrapper: [
      `border
        ${sizeStyles[size]}
        backdrop-white
        hover:!border-[#B2C7D9]
        data-[hover=true]:!bg-white
        focus-within:ring-0 focus-within:ring-transparent
        group-data-[focus-visible=true]:!bg-white
        group-data-[focus=true]:!bg-white
        ${hasError ? "!bg-error-500 !border-error-200" : isSuccess ? "!bg-success-300 !border-success400" : "!bg-white !border-greyscale-300"}
        ${hasError ? "group-data-[focus=true]:!border-error-200 group-data-[focus-visible=true]:!border-error-200" : isSuccess ? "group-data-[focus=true]:!border-success-400 group-data-[focus-visible=true]:!border-success-400" : "group-data-[focus=true]:!border-colorColmena group-data-[focus-visible=true]:!border-colorColmena"}
        cursor-text!
        `,
    ],
    innerWrapper: "!bg-transparent",
    input: [
      `${hasError ? "group-data-[has-value=true]:!text-error-200" : isSuccess ? "group-data-[has-value=true]:!text-success300" : "group-data-[has-value=true]:!text-greyscale-100"}
        ${hasError ? "placeholder:!text-error-200" : isSuccess ? "placeholder:!text-success300" : "placeholder:!text-greyscale-100"}
        group-data-[focus=true]:group-data-[has-value=true]:!text-greyscale300
        group-data-[focus-visible=true]:!text-greyscale-300
        `,
    ],
    clearButton: `!text-greyscale300`,
    helperWrapper: "",
    description: `text-sm mt-1 ${isDisabled ? "!text-greyscale-200" : isSuccess ? "!text-success400" : "!text-greyscale-100"}`,
    errorMessage: `!text-error-200 text-sm mt-1`,
  };

  // Define clear icon based on state
  const clearIconColor = hasError
    ? "!text-error-200"
    : isSuccess
      ? "!text-success300"
      : "!text-greyscale-100";

  const clearIcon = <XMarkIcon className={`h-4 w-4 ${clearIconColor}`} />;

  // Normalize value by removing extra spaces
  const normalizeValue = (value: string) => {
    return value.replace(/\s+/g, " ").replace(/^\s/, "");
  };

  // blur and change handlers
  const handleValueChange = (rawValue: string) => {
    const normalizedValue = normalizeValue(rawValue);
    onValueChange(normalizedValue);
  };

  const handleBlur = () => {
    onValueChange(value.trim());
    setTouched(true);
  };

  return (
    <Input
      description={description}
      classNames={classNames}
      endContent={isClearable ? clearIcon : endContent}
      errorMessage={validationErrorMessage}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isInvalid={hasError}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      size={size}
      label={label}
      labelPlacement={labelPlacement}
      maxLength={maxLength}
      minLength={minLength}
      onBlur={handleBlur}
      onValueChange={handleValueChange}
      placeholder={placeholder}
      radius={radius}
      startContent={startContent}
      type={type}
      value={value}
      {...props}
    />
  );
};
