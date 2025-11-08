import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const latin = Inter({
  subsets: ["latin"],
  variable: "--font-latin"
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic"
});

export const metadata: Metadata = {
  title: "دليل سكواد باسترز للمبتدئين",
  description:
    "موقع تفاعلي يضع بين يديك أهم الشخصيات في لعبة Squad Busters مع شروحات دقيقة، مهارات، ونصائح تساعدك على تحقيق الانتصار.",
  openGraph: {
    title: "دليل سكواد باسترز للمبتدئين",
    description:
      "اكتشف أفضل الطرق لبناء تشكيلتك في Squad Busters. تعرّف على أدوار الشخصيات، مهاراتها، وأفضل تركيباتها.",
    url: "https://agentic-504a7c23.vercel.app",
    locale: "ar",
    type: "website"
  },
  alternates: {
    canonical: "https://agentic-504a7c23.vercel.app"
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl" className={`${latin.variable} ${arabic.variable}`}>
      <body>
        <header className="site-header">
          <div className="site-header__container">
            <span className="site-header__tag">دليل المبتدئين</span>
            <h1>Squad Busters</h1>
            <p>
              كل ما تحتاجه لتبدأ رحلتك بثقة: تحليل للأبطال، مهارات قابلة للتنفيذ، ونصائح تكتيكية
              مستوحاة من خبرة مجتمع اللعبة.
            </p>
          </div>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="site-footer__container">
            <p>جميع الصور التوضيحية مستوحاة من fankit Supercell ومخصصة للاستخدام التعليمي.</p>
            <p>صُمم هذا الدليل ليستضيف بسهولة تحديثات مستقبلية وإضافات الشخصيات الجديدة.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
