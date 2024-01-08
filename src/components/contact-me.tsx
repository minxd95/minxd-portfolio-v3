"use client";

import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Phone, Copy, Mail } from "lucide-react";
import { useState } from "react";

export function ContactMe() {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const [isOpen, setIsOpen] = useState(false);

  return isDesktop ? (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>연락하기</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>연락처</DialogTitle>
        </DialogHeader>
        <Contacts isDesktop />
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              닫기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button>연락하기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>연락처</DrawerTitle>
        </DrawerHeader>
        <Contacts />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">닫기</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

interface ContactsProps {
  isDesktop?: boolean;
}

function Contacts({ isDesktop = false }: ContactsProps) {
  const { toast } = useToast();

  const phoneNumber = "+82-10-2441-6661";
  const emailAddress = "newobj95@gmail.com";

  return (
    <div className={cn("flex flex-col py-4 gap-4", !isDesktop && "px-4")}>
      <div className="flex items-center">
        <Phone className="w-4 h-4 mr-4" />
        <Label htmlFor="link" className="sr-only">
          Phone Number
        </Label>
        <div className="flex h-10 flex-1 mr-2 rounded-md border border-input bg-background px-3 py-2 text-sm">
          {phoneNumber}
        </div>
        <Button
          type="submit"
          size="sm"
          className="px-3"
          onClick={async () => {
            try {
              await window.navigator.clipboard.writeText(phoneNumber);
              toast({
                description: "휴대폰번호 복사 성공",
              });
            } catch {}
          }}
        >
          <span className="sr-only">Copy phone number</span>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center">
        <Mail className="w-4 h-4 mr-4" />
        <Label htmlFor="link" className="sr-only">
          Email Address
        </Label>
        <div className="flex h-10 flex-1 mr-2 rounded-md border border-input bg-background px-3 py-2 text-sm">
          {emailAddress}
        </div>
        <Button
          type="submit"
          size="sm"
          className="px-3"
          onClick={async () => {
            try {
              await window.navigator.clipboard.writeText(emailAddress);
              toast({
                description: "이메일주소 복사 성공",
              });
            } catch {}
          }}
        >
          <span className="sr-only">Copy email address</span>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
