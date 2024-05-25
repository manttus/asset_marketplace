import React, { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import Quill from "@/app/components/ui/quill";
import Select from "react-select";
import { FieldProps } from "@/app/interfaces/elements";

export function TextField<T extends FieldValues>(
  props: FieldProps<T, HTMLInputElement>
) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => <input type="text" {...props} {...field} />}
    />
  );
}

TextField.displayName = "TextField";

export function PasswordField<T extends FieldValues>(
  props: FieldProps<T, HTMLInputElement>
) {
  const [obscured, setObscured] = useState<boolean>(true);
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <div className="relative">
          <input type={obscured ? "password" : "text"} {...props} {...field} />
          <div
            className="absolute min-w-16 right-0 top-2 border-l border-gray-400 px-2 text-gray-400 cursor-pointer"
            onClick={() => setObscured((prev) => !prev)}
          >
            {obscured ? "Show" : "Hide"}
          </div>
        </div>
      )}
    />
  );
}

PasswordField.displayName = "PasswordField";

export function SelectField<T extends FieldValues>(
  props: FieldProps<T, HTMLSelectElement>
) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <select className={props.className} {...field}>
          <option value={""}>Select Options</option>
          {props.options?.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className={props.className}
            >
              {item.label}
            </option>
          ))}
        </select>
      )}
    />
  );
}

SelectField.displayName = "SelectField";

export function FileField<T extends FieldValues>(
  props: FieldProps<T, HTMLInputElement>
) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <input
          type="file"
          {...props}
          onChange={(event) => field.onChange(event.target.files)}
        />
      )}
    />
  );
}

FileField.displayName = "FileField";

export function QuillField<T extends FieldValues>(
  props: FieldProps<T, HTMLInputElement>
) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <Quill
          value={field.value.toString()}
          handler={(event) => field.onChange(event)}
          {...props}
        />
      )}
    />
  );
}

QuillField.displayName = "QuillField";

export function TextArea<T extends FieldValues>(
  props: FieldProps<T, HTMLTextAreaElement>
) {
  return (
    <Controller
      name={props.name}
      render={({ field }) => <textarea {...props} {...field} />}
      control={props.control}
    />
  );
}

TextArea.displayName = "TextArea";
