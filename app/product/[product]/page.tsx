import ProductPage from "@/app/components/modules/product-detail";

type ProductPageProps = {
    params: {
        product: string;
    };
};

export default async function Product({ params }: ProductPageProps) {
    const paramsData = await params;
    const response = await fetch(`${process.env.INSTANCE_URL}products/${paramsData?.product}`, {
        next: {
            revalidate: 3600
        }
    });
    const productDetail = await response.json();
    return (
        <ProductPage productDetail={productDetail} />
    );
}