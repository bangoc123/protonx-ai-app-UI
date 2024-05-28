import React from 'react';
import { Metadata } from 'next';
import ProductListClient from './client';

export const metadata: Metadata = {
	title: 'Fyr | Product List',
};

const ProductListPage = () => {
	return <ProductListClient />;
};

export default ProductListPage;
