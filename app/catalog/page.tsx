'use client'
import Container from "../components/container/Index"
import ProductCard from "../components/modules/catalog/ProductCard"
import FilterSidebar from "../components/modules/catalog/FilterSidebar"
import { useFetchProducts } from "../hooks"
import useFetch from "../hooks"
import React, { useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import { ITEMS_PER_PAGE } from "@/app/constants"
import { Category, Product } from "@/app/interfaces"
import { ProductCardPlaceholder, ProductPlaceHolder } from "../components/placeholder"
import { ErrorIcon, NoProductIcon } from "../components/icons"
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [mounted, setMounted] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])

  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  const activeCategory = Array.from(searchParams.keys())[0];
  const cats = useFetch<Category[]>('categories')
  
  const fetchParams = React.useMemo(() => ({
    category:activeCategory,
    title: debouncedSearchQuery || undefined,
    price_min: priceRange[0] > 0 ? priceRange[0] : undefined,
    price_max: priceRange[1] < 2000 ? priceRange[1] : undefined,
    categoryId: selectedCategory || undefined,
    limit: ITEMS_PER_PAGE,
    offset: (currentPage - 1) * ITEMS_PER_PAGE
  }), [debouncedSearchQuery, priceRange, selectedCategory, currentPage , activeCategory]);

  const { loading, data: products, error } = useFetchProducts(fetchParams)

  useEffect(() => {
    setMounted(true)
  }, [])

  console.log(activeCategory )
  useEffect(() => {
    if (cats.data) {
      setCategories(cats.data)
    }
  }, [cats.data])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, priceRange, debouncedSearchQuery])

  const displayProducts = products

  const showSkeleton = !mounted || (loading && !products)

  if (!mounted) {
    return (
      <ProductPlaceHolder />
    )
  }

  return (
    <Container className="lg:w-282 md:w-auto m-auto">
      <div className="py-8">

        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
            <p className="text-gray-500 mt-1">
              {displayProducts ? (
                <>
                  Showing <span className="font-semibold">{displayProducts.length}</span> products
                </>
              ) : (
                'Loading...'
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categories={categories}
          />

          <div className="flex-1">
            {error ? (
              <div className="flex flex-col items-center justify-center py-16">
                <ErrorIcon />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Products</h3>
                <p className="text-gray-500">{error}</p>
              </div>
            ) : showSkeleton ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 md:gap-4 gap-3">
                <ProductCardPlaceholder />
              </div>
            ) : !displayProducts || displayProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <NoProductIcon />
                <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Products Found</h2>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search query</p>
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setPriceRange([0, 2000])
                    setSearchQuery("")
                  }}
                  className="px-4 cursor-pointer py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:gap-6 md:gap-4 gap-3">
                  {displayProducts.map((product: Product) => (
                    <div key={product.id} className="h-full">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
