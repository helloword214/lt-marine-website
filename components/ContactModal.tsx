"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ContactModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onOpenChange]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() ? "" : "Name is required",
      email:
        /\S+@\S+\.\S+/.test(formData.email) && formData.email.trim()
          ? ""
          : "Valid email is required",
      message: formData.message.trim() ? "" : "Message cannot be empty",
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error);
    if (hasError) return;

    // 📨 Handle successful submission here
    alert("✅ Message sent!");
    setFormData({ name: "", email: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-[#FF6600] text-2xl font-bold">
            Contact Us
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <Label htmlFor="name" className="text-[#FF6600]">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className={`rounded-md ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email" className="text-[#FF6600]">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`rounded-md ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1">
            <Label htmlFor="message" className="text-[#FF6600]">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="I'm interested in hiring Filipino crew. Please reach out."
              value={formData.message}
              onChange={handleChange}
              className={`rounded-md ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full mt-2 bg-[#FF6600] hover:bg-orange-600 text-white font-semibold"
          >
            Send Message
          </Button>
        </form>

        <div className="mt-6 space-y-1 text-sm text-center text-gray-600">
          <p>
            📧 <span className="font-medium">crewing@lt-marine.com</span>
          </p>
          <p>
            ☎️ <span className="font-medium">+63 286 453468</span>
          </p>
          <p>
            🏢 4/F Five E-Com Center, Palm Coast Ave., MOA Complex, Pasay City
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
