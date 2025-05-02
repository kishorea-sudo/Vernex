import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      service: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-light">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-secondary font-serif text-lg">
              Get In Touch
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl font-bold text-primary mt-2 mb-6"
            >
              Let's Start Your Project
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-dark/80 text-lg mb-8">
              Ready to elevate your brand? Contact us today to discuss your
              project requirements and discover how Vernex can help you
              achieve your digital goals.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-6 mb-8">
              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">Our Location</h3>
                  <p className="text-dark/70">
                    123 Design Avenue, Creative District
                    <br />
                    City, Country 12345
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">Email Us</h3>
                  <p className="text-dark/70">
                    info@vernex.com
                    <br />
                    support@vernex.com
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">Call Us</h3>
                  <p className="text-dark/70">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-primary text-light rounded-full hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-primary text-light rounded-full hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-primary text-light rounded-full hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-primary text-light rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-display text-2xl font-bold text-primary mb-6">
                Send a Message
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Inquiry" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interested In</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="web-design">Website Creation</SelectItem>
                            <SelectItem value="branding">Logo & Poster Design</SelectItem>
                            <SelectItem value="video">Video Editing</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-light hover:bg-secondary transition-all duration-300"
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
