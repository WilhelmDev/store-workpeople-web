'use client'
import PageContainer from '@/components/shared/PageContainer'
import React, { Fragment, useEffect, useState } from 'react'
import DashboardCard from '../components/shared/DashboardCard'
import { Category } from '@/interfaces/category'
import { getCategories } from '@/services/category.service'
import CategoryList from '@/components/list/CategoryList'

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const categories = await getCategories()
        setCategories(categories)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])
  return (
    <PageContainer title='Todas las categoria' description='Aqui puedes ver las categorias'>
      <DashboardCard title="Listado de categorías">
        <Fragment>
          <CategoryList categories={categories} />
        </Fragment>
      </DashboardCard>
    </PageContainer>
  )
}
