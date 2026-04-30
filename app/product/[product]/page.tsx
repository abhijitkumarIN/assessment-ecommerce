import ProductPage from "@/app/components/modules/product-detail";
import type  { Metadata } from 'next'
type ProductPageProps = {
    params: {
        product: string;
    };
};
let title =''
export const metadata: Metadata = {
  title: title ?? 'Welcome to SembarkShop' ,
  description: 'Welcome to SembarkShop ',
}
export default async function Product({ params }: ProductPageProps) {
    const paramsData = await params;
    const response = await fetch(`${process.env.INSTANCE_URL}products/${paramsData?.product}`, {
        next: {
            revalidate: 3600
        }
    });
    const productDetail = await response.json();
    title = productDetail?.title;
    return (
        <ProductPage productDetail={productDetail} />
    );
}