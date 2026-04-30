import { ITEMS_PER_PAGE } from "@/app/constants";
import Container from "../container/Index";

export function ProductPlaceHolder() {
    return (<Container className="lg:w-282 md:w-auto w-auto">
        <div className="py-8 px-1">
            <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse" />
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="aspect-square bg-gray-200 animate-pulse" />
                        <div className="p-4 space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
                            <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
                            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                            <div className="flex justify-between items-center pt-2">
                                <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
                                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Container>)
}

export const ProductCardPlaceholder = () => {
    return (<>   {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
        <div key={i} className="bg-white w-full rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="aspect-square bg-gray-200 animate-pulse" />
            <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
                <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="flex justify-between items-center pt-2">
                    <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
                </div>
            </div>
        </div>
    ))}</>)
}