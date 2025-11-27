import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const countries = [
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+1", name: "États-Unis / Canada", flag: "🇺🇸" },
  { code: "+44", name: "Royaume-Uni", flag: "🇬🇧" },
  { code: "+49", name: "Allemagne", flag: "🇩🇪" },
  { code: "+39", name: "Italie", flag: "🇮🇹" },
  { code: "+34", name: "Espagne", flag: "🇪🇸" },
  { code: "+32", name: "Belgique", flag: "🇧🇪" },
  { code: "+41", name: "Suisse", flag: "🇨🇭" },
  { code: "+212", name: "Maroc", flag: "🇲🇦" },
  { code: "+216", name: "Tunisie", flag: "🇹🇳" },
];

const formSchema = z.object({
  company: z.string().trim().min(2, "L'entreprise doit contenir au moins 2 caractères").max(100),
  fullName: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  countryCode: z.string().min(1, "Sélectionnez un code pays"),
  phone: z.string().trim().min(6, "Numéro invalide").max(15).regex(/^[0-9]+$/, "Le numéro ne doit contenir que des chiffres"),
  country: z.string().min(2, "Sélectionnez un pays"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: "+33",
      country: "France",
    },
  });

  const countryCode = watch("countryCode");
  const selectedCountry = watch("country");

  const onSubmit = async (data: FormData) => {
    try {
      // Simuler l'envoi du formulaire
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", {
        ...data,
        fullPhone: `${data.countryCode}${data.phone}`,
      });
      
      setIsSubmitted(true);
      toast({
        title: "Demande envoyée !",
        description: "Notre équipe vous contactera sous 24h.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-12 shadow-xl border border-border text-center animate-scale-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
          Merci pour votre demande !
        </h3>
        <p className="text-muted-foreground mb-6">
          Notre équipe vous contactera sous 24 heures pour organiser votre démo personnalisée.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-2xl p-8 shadow-xl border border-border space-y-6">
      <div className="space-y-2">
        <Label htmlFor="company" className="text-foreground font-medium">
          Entreprise *
        </Label>
        <Input
          id="company"
          {...register("company")}
          placeholder="Nom de votre entreprise"
          className={errors.company ? "border-destructive" : ""}
        />
        {errors.company && (
          <p className="text-sm text-destructive">{errors.company.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-foreground font-medium">
          Nom et Prénom *
        </Label>
        <Input
          id="fullName"
          {...register("fullName")}
          placeholder="Votre nom complet"
          className={errors.fullName ? "border-destructive" : ""}
        />
        {errors.fullName && (
          <p className="text-sm text-destructive">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="text-foreground font-medium">Téléphone *</Label>
        <div className="flex gap-2">
          <Select
            value={countryCode}
            onValueChange={(value) => setValue("countryCode", value)}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            {...register("phone")}
            placeholder="612345678"
            className={`flex-1 ${errors.phone ? "border-destructive" : ""}`}
          />
        </div>
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="country" className="text-foreground font-medium">
          Pays *
        </Label>
        <Select
          value={selectedCountry}
          onValueChange={(value) => setValue("country", value)}
        >
          <SelectTrigger className={errors.country ? "border-destructive" : ""}>
            <SelectValue placeholder="Sélectionnez votre pays" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.name} value={country.name}>
                {country.flag} {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.country && (
          <p className="text-sm text-destructive">{errors.country.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Envoi en cours..." : "Demander une démo"}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
      </p>
    </form>
  );
};
