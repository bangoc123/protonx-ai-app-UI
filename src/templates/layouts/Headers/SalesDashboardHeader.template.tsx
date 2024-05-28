import React from 'react';
import Header, { HeaderLeft, HeaderRight } from '@/components/layouts/Header/Header';
import Breadcrumb from '@/components/layouts/Breadcrumb/Breadcrumb';
import DefaultHeaderRightCommon from '@/templates/layouts/Headers/_common/DefaultHeaderRight.common';

const SalesDashboardHeaderTemplate = () => {
	return (
		<Header>
			<HeaderLeft>
				<Breadcrumb path='Pages / Dashboard' currentPage='Sales' />
			</HeaderLeft>
			<HeaderRight>
				<DefaultHeaderRightCommon />
			</HeaderRight>
		</Header>
	);
};

export default SalesDashboardHeaderTemplate;
