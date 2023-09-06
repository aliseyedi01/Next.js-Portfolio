"use client";
import * as z from "zod";
// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// components
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
// icons
import { PersonIcon, EnvelopeClosedIcon, TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { Locale } from "@/lib/i18n.config";

const FormSchema = z.object({
  username: z
    .string({
      required_error: "Please enter a username",
    })
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(16, {
      message: "Username must not be longer than 16 characters.",
    }),
  email: z
    .string({
      required_error: "Please enter a username",
    })
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .refine(
      (value) => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value),
      "Invalid email address",
    ),

  message: z
    .string({
      required_error: "Please enter a message",
    })
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(150, {
      message: "Message must not be longer than 150 characters.",
    }),
});

const ContactForm: React.FC<{ lang: Locale }> = ({ lang }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Success !",
      description: `${data.username} , your message has been sent successfully`,
      variant: "success",
    });
  }

  const dataForm = {
    name: {
      en: "Name",
      fa: "نام",
    },
    email: {
      en: "Email",
      fa: "ایمیل",
    },
    message: {
      en: "Message",
      fa: "پیام",
    },
    send: {
      en: "Send",
      fa: "ارسال ",
    },
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="order-1 w-5/6 space-y-6 font-kanit md:order-2 md:w-2/3"
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
                  placeholder={dataForm.name[lang]}
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
                  placeholder={dataForm.email[lang]}
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
                  placeholder={dataForm.message[lang]}
                  {...field}
                  icon={<TextAlignJustifyIcon />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-alkatra rtl:font-iranSans">
          {dataForm.send[lang]}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
