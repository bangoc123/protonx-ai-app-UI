import React from 'react';
import ProductPageClient from '@/app/[locale]/sales/product/[slug]/client';

const ProductPage = ({ params }: { params: { slug: string } }) => {
	return <ProductPageClient params={params} />;
};

export default ProductPage;
