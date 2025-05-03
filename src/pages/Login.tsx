
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type LoginFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      // Login functionality will be implemented later
      console.log("Login data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow container mx-auto flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-haven-blue mb-2">{t('login')}</h1>
              <p className="text-gray-600">{t('login.welcome')}</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {t('login.email')}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t('login.emailPlaceholder')} 
                          type="email" 
                          className="text-right" 
                          {...field} 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        {t('login.password')}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t('login.passwordPlaceholder')} 
                          type="password" 
                          className="text-right" 
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-4">
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? t('login.loading') : t('login')}
                  </Button>
                  
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                      {t('login.noAccount')} {' '}
                      <Link to="/signup" className="text-haven-blue hover:underline">
                        {t('signup')}
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
