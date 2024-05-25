import { z } from "zod";

const mintFormResolver = z.object({
  title: z
    .string()
    .min(4, { message: "Should be greater than 4" })
    .max(10, { message: "Should be less than 10" }),
  type: z.string({ message: "Should not be empty" }),
  description: z
    .string({ message: "Should not be empty" })
    .min(4, { message: "Should be greater than 4" })
    .max(10, { message: "Should be less than 255" }),
  asset: z.custom<FileList>(),
});

export default mintFormResolver;
