import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countries = [
  { code: "+34", country: "ES", flag: "🇪🇸", name: "España" },
  { code: "+1", country: "US", flag: "🇺🇸", name: "Estados Unidos" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "Reino Unido" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "Francia" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Alemania" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Italia" },
  { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugal" },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Países Bajos" },
  { code: "+32", country: "BE", flag: "🇧🇪", name: "Bélgica" },
  { code: "+41", country: "CH", flag: "🇨🇭", name: "Suiza" },
  { code: "+43", country: "AT", flag: "🇦🇹", name: "Austria" },
  { code: "+52", country: "MX", flag: "🇲🇽", name: "México" },
  { code: "+54", country: "AR", flag: "🇦🇷", name: "Argentina" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brasil" },
  { code: "+56", country: "CL", flag: "🇨🇱", name: "Chile" },
  { code: "+57", country: "CO", flag: "🇨🇴", name: "Colombia" },
  { code: "+58", country: "VE", flag: "🇻🇪", name: "Venezuela" },
  { code: "+51", country: "PE", flag: "🇵🇪", name: "Perú" },
  { code: "+593", country: "EC", flag: "🇪🇨", name: "Ecuador" },
  { code: "+503", country: "SV", flag: "🇸🇻", name: "El Salvador" },
  { code: "+502", country: "GT", flag: "🇬🇹", name: "Guatemala" },
  { code: "+506", country: "CR", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+507", country: "PA", flag: "🇵🇦", name: "Panamá" },
  { code: "+598", country: "UY", flag: "🇺🇾", name: "Uruguay" },
  { code: "+595", country: "PY", flag: "🇵🇾", name: "Paraguay" },
  { code: "+591", country: "BO", flag: "🇧🇴", name: "Bolivia" },
  { code: "+504", country: "HN", flag: "🇭🇳", name: "Honduras" },
  { code: "+505", country: "NI", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+1809", country: "DO", flag: "🇩🇴", name: "Rep. Dominicana" },
  { code: "+53", country: "CU", flag: "🇨🇺", name: "Cuba" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japón" },
  { code: "+82", country: "KR", flag: "🇰🇷", name: "Corea del Sur" },
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+64", country: "NZ", flag: "🇳🇿", name: "Nueva Zelanda" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Rusia" },
  { code: "+48", country: "PL", flag: "🇵🇱", name: "Polonia" },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Suecia" },
  { code: "+47", country: "NO", flag: "🇳🇴", name: "Noruega" },
  { code: "+45", country: "DK", flag: "🇩🇰", name: "Dinamarca" },
  { code: "+358", country: "FI", flag: "🇫🇮", name: "Finlandia" },
  { code: "+353", country: "IE", flag: "🇮🇪", name: "Irlanda" },
  { code: "+30", country: "GR", flag: "🇬🇷", name: "Grecia" },
  { code: "+90", country: "TR", flag: "🇹🇷", name: "Turquía" },
  { code: "+966", country: "SA", flag: "🇸🇦", name: "Arabia Saudita" },
  { code: "+971", country: "AE", flag: "🇦🇪", name: "Emiratos Árabes" },
  { code: "+972", country: "IL", flag: "🇮🇱", name: "Israel" },
  { code: "+20", country: "EG", flag: "🇪🇬", name: "Egipto" },
  { code: "+27", country: "ZA", flag: "🇿🇦", name: "Sudáfrica" },
  { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
  { code: "+212", country: "MA", flag: "🇲🇦", name: "Marruecos" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
}

const PhoneInput = ({ value, onChange, placeholder = "600 000 000", maxLength = 40 }: PhoneInputProps) => {
  // Parse the initial value to extract country code
  const getInitialCountryCode = () => {
    for (const country of countries) {
      if (value?.startsWith(country.code)) {
        return country.code;
      }
    }
    return "+34"; // Default to Spain
  };

  const getInitialPhoneNumber = () => {
    const countryCode = getInitialCountryCode();
    if (value?.startsWith(countryCode)) {
      return value.slice(countryCode.length).trim();
    }
    return value || "";
  };

  const [countryCode, setCountryCode] = useState(getInitialCountryCode());
  const [phoneNumber, setPhoneNumber] = useState(getInitialPhoneNumber());

  const handleCountryChange = (newCode: string) => {
    setCountryCode(newCode);
    const fullNumber = phoneNumber ? `${newCode} ${phoneNumber}` : "";
    onChange(fullNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setPhoneNumber(newPhone);
    const fullNumber = newPhone ? `${countryCode} ${newPhone}` : "";
    onChange(fullNumber);
  };

  const selectedCountry = countries.find(c => c.code === countryCode) || countries[0];

  return (
    <div className="flex gap-2">
      <Select value={countryCode} onValueChange={handleCountryChange}>
        <SelectTrigger className="w-[100px] flex-shrink-0">
          <SelectValue>
            <span className="flex items-center gap-1">
              <span>{selectedCountry.flag}</span>
              <span className="text-xs">{selectedCountry.code}</span>
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-card border border-border z-50 max-h-[300px]">
          {countries.map((country) => (
            <SelectItem key={country.country} value={country.code}>
              <span className="flex items-center gap-2">
                <span>{country.flag}</span>
                <span className="text-sm">{country.name}</span>
                <span className="text-xs text-muted-foreground">{country.code}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        placeholder={placeholder}
        maxLength={maxLength}
        value={phoneNumber}
        onChange={handlePhoneChange}
        className="flex-1"
      />
    </div>
  );
};

export default PhoneInput;
