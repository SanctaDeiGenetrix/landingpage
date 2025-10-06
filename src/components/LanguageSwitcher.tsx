import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ] as const;

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          variant={language === lang.code ? 'default' : 'outline'}
          size="sm"
          className="h-9 px-3 transition-all duration-300"
        >
          <span className="mr-1.5">{lang.flag}</span>
          {lang.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
