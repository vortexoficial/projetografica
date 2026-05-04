import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ProductDetail } from "@/components/store/product-detail";
import { QuoteModalProvider } from "@/components/quote/quote-modal-provider";
import { getProductBySlug, storeProducts } from "@/lib/store-products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return storeProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto não encontrado | Loja da Panni",
      description: "Produto não encontrado na Loja da Panni.",
    };
  }

  return {
    title: `${product.name} | Loja da Panni`,
    description: product.shortDescription,
    alternates: {
      canonical: `/loja/${product.slug}`,
    },
  };
}

export default async function StoreProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <QuoteModalProvider>
      <main className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--bg-main)" }}>
        <Navbar />
        <ProductDetail product={product} />
        <Footer />
      </main>
    </QuoteModalProvider>
  );
}
