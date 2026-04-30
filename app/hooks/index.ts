import { useEffect, useState } from "react"

interface UseFetchResult<T> {
  loading: boolean
  data: T | null
  error: string | null
}

const useFetch = <T,>(API: string): UseFetchResult<T> => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(`${process.env.INSTANCE_URL + API}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false)
      })
  }, [API])

  return {
    loading,
    data,
    error
  }
}

// Hook for fetching products with filters and pagination (offset/limit)
export const useFetchProducts = (
  params: {
    title?: string
    price_min?: number
    price_max?: number
    categoryId?: number
    limit?: number
    offset?: number
  } = {}
) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const searchParams = new URLSearchParams()
    
    if (params.title) searchParams.append('title', params.title)
    if (params.price_min) searchParams.append('price_min', params.price_min.toString())
    if (params.price_max) searchParams.append('price_max', params.price_max.toString())
    if (params.categoryId) searchParams.append('categoryId', params.categoryId.toString())
    if (params.limit) searchParams.append('limit', params.limit.toString())
    if (params.offset) searchParams.append('offset', params.offset.toString())

    const queryString = searchParams.toString()
    const url = `${process.env.INSTANCE_URL}products${queryString ? `?${queryString}` : ''}`

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false)
      })
  }, [params])

  return {
    loading,
    data,
    error
  }
}

export default useFetch
