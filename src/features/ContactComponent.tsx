import { SectionContainer } from "@/components/layouts/SectionContainer";
import { TitleComponent } from "@/components/layouts/TitleComponent";
import { Input } from "@/components/ui/input";
import {
  CheckCircle,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { ChangeEvent, useState } from "react";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setStatus({ loading: true, success: false, error: "" });

    try {
      // Validasi
      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        setStatus({
          loading: false,
          success: false,
          error: "Semua field harus diisi!",
        });
        return;
      }

      // Simulasi API call - ganti dengan endpoint Anda
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Example: mengirim email menggunakan API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setStatus({ loading: false, success: true, error: "" });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message setelah 5 detik
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Terjadi kesalahan. Silakan coba lagi.",
      });
    }
  };

  return (
    <SectionContainer
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <TitleComponent text="Get In Touch" className="text-4xl lg:text-5xl" />

      <div className="w-full max-w-2xl">
        {/* Form */}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-8">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent" />

          <div className="relative space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <User className="h-4 w-4 text-primary" />
                Nama
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Mail className="h-4 w-4 text-primary" />
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
              />
            </div>

            {/* Subject Input */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4 text-primary" />
                Subjek
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subjek pesan"
              />
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            {/* Success Message */}
            {status.success && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">
                  Pesan berhasil dikirim! Terima kasih.
                </span>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-600">
                <span className="text-sm font-medium">{status.error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status.loading}
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {status.loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Kirim Pesan
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
