"use client";
import * as z from "zod";
// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// components
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/Button";
import { toast } from "../ui/use-toast";
// icons
import { PersonIcon, EnvelopeClosedIcon, TextAlignJustifyIcon } from "@radix-ui/react-icons";
// types
import { LangProps } from "@/types/common";

const ContactForm: React.FC<LangProps> = ({ lang }) => {
  const dataForm = {
    username: {
      form: {
        en: "Name",
        fa: "نام",
      },
      require: {
        en: "Please enter a username",
        fa: "لطفا یک نام را وارد نمایید",
      },
      min: {
        en: "Username must be at least 2 characters.",
        fa: "نام  باید حداقل 2 کاراکتر باشد",
      },
      max: {
        en: "Username must not be longer than 16 characters.",
        fa: "نام  نباید بیشتر از 16 کاراکتر باشد",
      },
    },

    email: {
      form: {
        en: "Email",
        fa: "ایمیل",
      },
      require: {
        en: "Please enter a Email",
        fa: "لطفا یک ایمیل را وارد نمایید",
      },
      refine: {
        en: "Invalid email address",
        fa: "ایمیل نامعتبر است",
      },
    },
    message: {
      form: {
        en: "Message",
        fa: "پیام",
      },
      require: {
        en: "Please enter a message",
        fa: "لطفا یک پیام وارد نمایید",
      },
      min: {
        en: "Message must be at least 10 characters.",
        fa: "پیام باید حداقل 10 کاراکتر باشد",
      },
      max: {
        en: "Message must not be longer than 150 characters.",
        fa: "پیام شما نباید از 150 کاراکتر بیشتر باشد",
      },
    },
    send: {
      en: "Send",
      fa: "ارسال ",
    },
    toast: {
      title: {
        en: "Success !",
        fa: "تبریک",
      },
      description: {
        en: "your message has been sent successfully",
        fa: "پیام شما با موفقیت ارسال گردید ",
      },
    },
  };

  const FormSchema = z.object({
    username: z
      .string({
        required_error: `${dataForm.username.require[lang]}`,
      })
      .min(2, {
        message: `${dataForm.username.min[lang]}`,
      })
      .max(16, {
        message: `${dataForm.username.max[lang]}`,
      }),
    email: z
      .string({
        required_error: `${dataForm.email.require[lang]}`,
      })
      .refine(
        (value) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value),
        `${dataForm.email.refine[lang]}`,
      ),

    message: z
      .string({
        required_error: `${dataForm.message.require[lang]}`,
      })
      .min(10, {
        message: `${dataForm.message.min[lang]}`,
      })
      .max(150, {
        message: `${dataForm.message.max[lang]}`,
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: `${dataForm.toast.title[lang]}`,
      description: `${data.username} , ${dataForm.toast.description[lang]}`,
      variant: "success",
      className: "rtl:font-iranSans font text-lg font-kanit",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="order-1 w-5/6 space-y-6 font-kanit rtl:font-iranSans md:order-2 md:w-2/3"
      >
        {/* UserName Field */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="relative"
                  placeholder={dataForm.username.form[lang]}
                  icon={<PersonIcon />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={dataForm.email.form[lang]}
                  icon={<EnvelopeClosedIcon />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder={dataForm.message.form[lang]}
                  {...field}
                  icon={<TextAlignJustifyIcon />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-mitr rtl:font-iranSans">
          {dataForm.send[lang]}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
