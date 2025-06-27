import Separator from "@/components/ui/separator/separator";
import { MapPin, PhoneCall, Mail } from "lucide-react";

const item = [
    {icon: MapPin, title: "Разом — далі", text: "Майбутнє починається тут.", separator: Separator},
    {icon: PhoneCall, title: "Зателефонуйте нам", text: "067-(685)-56-25", separator: Separator},
    {icon: Mail, title: "Надішліть нам повідомлення", text: "fluxify@gmail.com"},
]

const Rectangle = () => {
    return (
      <section className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth flex md:flex-wrap items-stretch gap-6 py-4 bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E] rounded-[40px] md:rounded-[90px] px-4 justify-start md:justify-center sm:px-4">
        {item.map((i, index) => (
          <div
            key={index}
            className="relative px-5 flex-shrink-0 snap-start w-[90vw] sm:w-[70%] md:w-auto md:flex-1 max-w-[300px] flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6"
          >
            <i.icon className="text-[#C0B7E8] text-5xl md:text-7xl" strokeWidth={2.5} width={40} height={40}/>
            <div>
              <h2 className="text-white text-lg md:text-xl font-semibold mb-1">{i.title}</h2>
              <p className="text-[#C0B7E8] text-sm md:text-base leading-relaxed">{i.text}</p>
            </div>
            {i.separator && <i.separator />}
          </div>
        ))}
      </section>
    )
}

export default Rectangle;

