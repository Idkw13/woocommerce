import { Button } from "./button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger } from "./dialog";
import { Input } from "./input";
import { Label } from "./label";
import { Mail } from "lucide-react";

interface ContactDialogProps {
  triggerText: string;
  title: string;
  description: string;
  includeMessage?: boolean;
  triggerClassName?: string;
}

export function ContactDialog({ 
  triggerText, 
  title, 
  description, 
  includeMessage = false,
  triggerClassName = ""
}: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg w-full rounded-3xl p-0 border-0 shadow-2xl animate-in fade-in-90 zoom-in-90 overflow-hidden" style={{background: 'linear-gradient(135deg, #e0fbe5 0%, #f8fafc 100%)'}}>
        <div className="p-8">
          <DialogHeader className="mb-4 flex flex-row items-center gap-3">
            <span className="inline-flex items-center justify-center bg-green-100 text-green-700 rounded-full p-2">
              <Mail className="w-6 h-6" />
            </span>
            <div>
              <DialogTitle className="text-2xl font-bold text-green-700 mb-1">{title}</DialogTitle>
              <DialogDescription className="text-gray-500 text-base">{description}</DialogDescription>
            </div>
          </DialogHeader>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base text-black">Ваше ім'я</Label>
              <Input id="name" name="name" placeholder="Введіть ім'я" required className="rounded-xl border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 text-base" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base text-black">Телефон <span className="text-red-500">*</span></Label>
              <Input id="phone" name="phone" type="tel" placeholder="Ваш номер телефону" required className="rounded-xl border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 text-base" />
            </div>
            {includeMessage && (
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base text-black">Повідомлення</Label>
                <textarea id="message" name="message" placeholder="Ваше питання або побажання" rows={4} className="rounded-xl border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 text-base w-full resize-none p-3" />
              </div>
            )}
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
  );
} 