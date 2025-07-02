import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 md:py-24">
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-6 text-green-700 font-serif">Termoplast</h1>
        <p className="mb-8 text-xl text-black max-w-xl">Виробництво та встановлення вхідних і міжкімнатних дверей, металопластикових та алюмінієвих вікон. Кредит, безкоштовна доставка, сучасний сервіс для вашого дому чи бізнесу.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-yellow-400 text-black font-semibold px-10 py-6 rounded-full shadow hover:bg-green-600 hover:text-white transition-colors text-xl w-full sm:w-auto">Залишити заявку</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg w-full rounded-3xl p-0 border-0 shadow-2xl animate-in fade-in-90 zoom-in-90 overflow-hidden" style={{background: 'linear-gradient(135deg, #e0fbe5 0%, #f8fafc 100%)'}}>
              <div className="p-8">
                <DialogHeader className="mb-4 flex flex-row items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-green-100 text-green-700 rounded-full p-2">
                    <Mail className="w-6 h-6" />
                  </span>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-green-700 mb-1">Залишити заявку</DialogTitle>
                    <DialogDescription className="text-gray-500 text-base">Ми зв'яжемося з вами найближчим часом</DialogDescription>
                  </div>
                </DialogHeader>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base text-black">Ваше ім'я</Label>
                    <Input id="name" name="name" placeholder="Введіть ім'я" className="rounded-xl border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base text-black">Телефон <span className="text-red-500">*</span></Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Ваш номер телефону" required className="rounded-xl border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-base text-black">Місто</Label>
                    <Input id="city" name="city" placeholder="Введіть місто" className="rounded-xl border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 text-base" />
                  </div>
                  <div className="border-t border-gray-200 my-6" />
                  <DialogFooter className="flex flex-row gap-4 pt-0">
                    <Button type="submit" className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white text-xl py-6 rounded-full shadow-lg hover:scale-105 hover:from-green-700 hover:to-green-600 transition-all">Відправити</Button>
                    <DialogClose asChild>
                      <Button variant="ghost" type="button" className="flex-1 border border-gray-200 text-gray-700 hover:bg-gray-100 rounded-full py-6 text-xl">Скасувати</Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-[400px] h-[300px] rounded-2xl bg-gradient-to-br from-green-200 to-blue-100 flex items-center justify-center shadow-xl">
          <span className="text-4xl font-bold text-green-700 font-serif">Termoplast</span>
        </div>
      </div>
    </section>
  );
} 