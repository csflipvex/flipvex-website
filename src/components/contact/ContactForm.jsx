import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { ArrowRight, Loader2 } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your name (at least 2 characters).").max(80),
  email: z.string().email("Please enter a valid business email address."),
  phone: z.string().min(7, "Please provide a valid contact number.").max(20),
  companyName: z.string().optional(),
  serviceCategory: z.string().min(1, "Please select an area of interest."),
  message: z.string().min(10, "Please share a brief summary of your project (min 10 characters).").max(2000),
  botValidation: z.string().max(0, "Bot detected"),
});

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      serviceCategory: 'Web & E-Commerce Engineering',
      message: '',
      botValidation: ''
    }
  });

  const onSubmit = async (data) => {
    if (data.botValidation) return;

    setIsSubmitting(true);
    const scriptUrl = import.meta.env.VITE_CONTACT_FORM_URL;

    if (!scriptUrl) {
      toast.error("Form endpoint URL not configured. Please set VITE_CONTACT_FORM_URL in .env");
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("fullName", data.fullName.trim());
      formData.append("email", data.email.trim());
      formData.append("phone", data.phone.trim());
      formData.append("companyName", data.companyName ? data.companyName.trim() : "N/A");
      formData.append("serviceCategory", data.serviceCategory);
      formData.append("message", data.message.trim());

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString()
      });

      toast.success("Thank you. Your message has been received by Flipvex.", {
        description: "An engineer will review your inquiry shortly."
      });
      reset();
    } catch (err) {
      toast.error("We couldn't submit your message. Please reach us directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-10 space-y-6">
      <input 
        type="text" 
        {...register("botValidation")} 
        tabIndex="-1" 
        autoComplete="off" 
        className="hidden" 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">
            Your Name *
          </label>
          <input 
            type="text"
            placeholder=""
            {...register("fullName")}
            disabled={isSubmitting}
            className={`w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition ${
              errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:ring-brand-purple/20'
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1.5">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">
            Email Address *
          </label>
          <input 
            type="email"
            placeholder=""
            {...register("email")}
            disabled={isSubmitting}
            className={`w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition ${
              errors.email ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:ring-brand-purple/20'
            }`}
          />
          {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">
            Contact Number *
          </label>
          <input 
            type="tel"
            placeholder=""
            {...register("phone")}
            disabled={isSubmitting}
            className={`w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition ${
              errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:ring-brand-purple/20'
            }`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1.5">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">
            Company / Organization
          </label>
          <input 
            type="text"
            placeholder=""
            {...register("companyName")}
            disabled={isSubmitting}
            className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">
          Project Focus Area
        </label>
        <select
          {...register("serviceCategory")}
          disabled={isSubmitting}
          className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition"
        >
          <option value="Web & E-Commerce Engineering">Web & E-Commerce Engineering</option>
          <option value="Custom Software & ERP Suites">Custom Software & ERP Suites</option>
          <option value="Brand Identity & Multimedia">Brand Identity & Multimedia</option>
          <option value="General Enterprise Consultation">General Enterprise Consultation</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 mb-2">
          Project Overview *
        </label>
        <textarea 
          rows={4}
          placeholder=""
          {...register("message")}
          disabled={isSubmitting}
          className={`w-full px-4 py-3.5 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 transition resize-y ${
            errors.message ? 'border-red-500 focus:ring-red-200' : 'border-zinc-200 focus:ring-brand-purple/20'
          }`}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#E04B00] transition disabled:opacity-50 shadow-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting...</span>
          </>
        ) : (
          <>
            <span>Submit Message</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};