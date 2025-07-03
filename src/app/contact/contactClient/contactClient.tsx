"use client"
import { motion } from "motion/react"
import { waveVariants } from "@/app/global.animation";
import Button from "@/components/ui/button/Button";
import PhoneMask from "@/components/ui/phoneMask/phoneMask";
import { sendEmail } from "@/app/api/submit-form";

const fields = [
  {
    label: "Ваше ім’я",
    id: "name",
    type: "text",
    placeholder: "Введіть ім’я",
    component: "input",
  },
  {
    label: "Телефон",
    id: "phone",
    type: "tel",
    placeholder: "+38 (___) ___-__-__",
    component: "phoneMask",
  },
  {
    label: "Ел. пошта",
    id: "email",
    type: "email",
    placeholder: "example@mail.com",
    component: "input",
  },
  {
    label: "Питання",
    id: "message",
    placeholder: "Ваше питання...",
    component: "textarea",
  },
];

const ContactClient = () => {
    return (
        <>
            <motion.div
                className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] opacity-40 rounded-b-[80px]"
                variants={waveVariants}
                animate="animate"
              />
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#C0B7E8] via-[#A683D9] to-[#8176AF] mb-8"
              >
                Зв’яжіться з нами
              </motion.h2>
              <form className="relative flex flex-col gap-6 z-10" action={sendEmail}>
                {fields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label className="text-gray-300 font-semibold" htmlFor={field.id}>
                      {field.label}
                    </label>
                    {field.component === "input" && (
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        className="rounded-lg bg-[#2A273A] border border-transparent focus:border-[#8176AF] text-white px-4 py-3 transition"
                        placeholder={field.placeholder}
                        required
                      />
                    )}
                    {field.component === "phoneMask" && <PhoneMask name={field.id}/>}
                    {field.component === "textarea" && (
                      <textarea
                        id={field.id}
                        name={field.id}
                        rows={4}
                        className="rounded-lg bg-[#2A273A] border border-transparent focus:border-[#8176AF] text-white px-4 py-3 transition resize-none"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
                <Button type="submit" aria-label="Відправити контактну форму">Відправити</Button>
          </form>
        </>
    )
}

export default ContactClient