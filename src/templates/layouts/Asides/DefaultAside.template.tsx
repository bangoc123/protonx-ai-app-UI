import React from 'react';
import { appPages, componentsPages } from '@/config/pages.config';
import { useRouter } from 'next/navigation';
import Aside, { AsideBody, AsideFooter, AsideHead } from '../../../components/layouts/Aside/Aside';
import LogoAndAsideTogglePart from './_parts/LogoAndAsideToggle.part';
import DarkModeSwitcherPart from './_parts/DarkModeSwitcher.part';
import Nav, {
	NavButton,
	NavCollapse,
	NavItem,
	NavSeparator,
	NavTitle,
	NavUser,
} from '../../../components/layouts/Navigation/Nav';
import Badge from '../../../components/ui/Badge';
import UserTemplate from '../User/User.template';
import usersDb from '../../../mocks/db/users.db';

const DefaultAsideTemplate = () => {
	const router = useRouter();

	return (
		<Aside>
			<AsideHead>
				<LogoAndAsideTogglePart />
			</AsideHead>
			<AsideBody>
				<Nav>
					{/* <NavItem {...appPages.salesAppPages.subPages.salesDashboardPage} /> */}
					{/* <NavItem {...appPages.aiAppPages.subPages.aiDashboardPage}>
						<Badge
							variant='outline'
							color='amber'
							className='border-transparent leading-none'>
							NEW
						</Badge>
					</NavItem> */}
					{/* <NavItem {...appPages.crmAppPages.subPages.crmDashboardPage}>
						<NavButton
							title='New Customer'
							icon='HeroPlusCircle'
							onClick={() => {
								router.push(
									`../${appPages.crmAppPages.subPages.customerPage.to}/new`,
								);
							}}
						/>
					</NavItem>
					<NavItem {...appPages.projectAppPages.subPages.projectDashboardPage}>
						<Badge
							variant='outline'
							color='emerald'
							className='border-transparent leading-none'>
							6
						</Badge>
					</NavItem> */}

					<NavTitle>Apps</NavTitle>
					{/* <NavCollapse
						text={appPages.salesAppPages.text}
						to={appPages.salesAppPages.to}
						icon={appPages.salesAppPages.icon}>
						<NavItem {...appPages.salesAppPages.subPages.salesDashboardPage} />
						<NavCollapse
							text={appPages.salesAppPages.subPages.productPage.text}
							to={appPages.salesAppPages.subPages.productPage.to}
							icon={appPages.salesAppPages.subPages.productPage.icon}>
							<NavItem
								{...appPages.salesAppPages.subPages.productPage.subPages.listPage}
							/>
							<NavItem
								{...appPages.salesAppPages.subPages.productPage.subPages.editPage}
							/>
						</NavCollapse>
						<NavCollapse
							text={appPages.salesAppPages.subPages.categoryPage.text}
							to={appPages.salesAppPages.subPages.categoryPage.to}
							icon={appPages.salesAppPages.subPages.categoryPage.icon}>
							<NavItem
								{...appPages.salesAppPages.subPages.categoryPage.subPages.listPage}
							/>
							<NavItem
								{...appPages.salesAppPages.subPages.categoryPage.subPages.editPage}
							/>
						</NavCollapse>
					</NavCollapse> */}

					<NavCollapse
						text={appPages.aiAppPages.text}
						to={appPages.aiAppPages.to}
						icon={appPages.aiAppPages.icon}>
						{/* <NavItem {...appPages.aiAppPages.subPages.aiDashboardPage} /> */}
						<NavCollapse
							text={appPages.aiAppPages.subPages.chatPages.text}
							to={appPages.aiAppPages.subPages.chatPages.to}
							icon={appPages.aiAppPages.subPages.chatPages.icon}>
							<NavItem
								{...appPages.aiAppPages.subPages.chatPages.subPages.photoPage}
							/>
							<NavItem
								{...appPages.aiAppPages.subPages.chatPages.subPages.photoDrawPage}
							/>
							{/* <NavItem {...appPages.aiAppPages.subPages.chatPages.subPages.videoPage}>
								<Badge
									variant='outline'
									color='violet'
									className='!border-transparent leading-none'>
									8
								</Badge>
							</NavItem> */}
							<NavItem
								{...appPages.aiAppPages.subPages.chatPages.subPages.audioPage}
							/>
							<NavItem
								{...appPages?.aiAppPages?.subPages?.chatPages?.subPages
									?.speechRecognitionPage}
							/>
							<NavItem
								{...appPages?.aiAppPages?.subPages?.chatPages?.subPages?.ragPage}
							/>
							{/* <NavItem {...appPages.aiAppPages.subPages.chatPages.subPages.codePage}>
								<Badge
									variant='outline'
									color='emerald'
									className='!border-transparent leading-none'>
									3
								</Badge>
							</NavItem> */}
							<NavItem
								{...appPages?.aiAppPages?.subPages?.chatPages?.subPages
									?.chatBotPage}
							/>
							<NavItem
								{...appPages?.aiAppPages?.subPages?.chatPages?.subPages?.smartHr}
							/>
						</NavCollapse>
					</NavCollapse>

					{/* <NavCollapse
						text={appPages.crmAppPages.text}
						to={appPages.crmAppPages.to}
						icon={appPages.crmAppPages.icon}>
						<NavItem {...appPages.crmAppPages.subPages.crmDashboardPage} />
						<NavCollapse
							text={appPages.crmAppPages.subPages.customerPage.text}
							to={appPages.crmAppPages.subPages.customerPage.to}
							icon={appPages.crmAppPages.subPages.customerPage.icon}>
							<NavItem
								{...appPages.crmAppPages.subPages.customerPage.subPages.listPage}
							/>
							<NavItem
								{...appPages.crmAppPages.subPages.customerPage.subPages.editPage}
							/>
						</NavCollapse>
						<NavCollapse
							text={appPages.crmAppPages.subPages.rolePage.text}
							to={appPages.crmAppPages.subPages.rolePage.to}
							icon={appPages.crmAppPages.subPages.rolePage.icon}>
							<NavItem
								{...appPages.crmAppPages.subPages.rolePage.subPages.listPage}
							/>
							<NavItem
								{...appPages.crmAppPages.subPages.rolePage.subPages.editPage}
							/>
						</NavCollapse>
					</NavCollapse>
					<NavCollapse
						text={appPages.projectAppPages.text}
						to={appPages.projectAppPages.to}
						icon={appPages.projectAppPages.icon}>
						<NavItem {...appPages.projectAppPages.subPages.projectDashboardPage}>
							<NavButton
								title='New Project'
								icon='HeroPlusCircle'
								onClick={() => {
									router.push(
										`../${appPages.projectAppPages.subPages.projectBoardPageLink.to}/new`,
									);
								}}
							/>
						</NavItem>
						<NavItem {...appPages.projectAppPages.subPages.projectBoardPage}>
							<Badge
								variant='outline'
								color='emerald'
								className='border-transparent leading-none'>
								6
							</Badge>
						</NavItem>
					</NavCollapse>
					<NavItem
						text={appPages.educationAppPages.text}
						to={appPages.educationAppPages.to}
						icon={appPages.educationAppPages.icon}>
						<Badge variant='outline' className='border-transparent leading-none'>
							Soon
						</Badge>
					</NavItem>
					<NavItem
						text={appPages.reservationAppPages.text}
						to={appPages.reservationAppPages.to}
						icon={appPages.reservationAppPages.icon}>
						<Badge variant='outline' className='border-transparent leading-none'>
							Soon
						</Badge>
					</NavItem>
					<NavItem
						text={appPages.mailAppPages.text}
						to={appPages.mailAppPages.to}
						icon={appPages.mailAppPages.icon}>
						<Badge variant='outline' className='border-transparent leading-none'>
							Soon
						</Badge>
					</NavItem>

					<NavSeparator />

					<NavTitle>Components & Templates</NavTitle>
					<NavCollapse
						text={componentsPages.uiPages.text}
						to={componentsPages.uiPages.to}
						icon={componentsPages.uiPages.icon}>
						<NavItem {...componentsPages.uiPages.subPages.alertPage} />
						<NavItem {...componentsPages.uiPages.subPages.badgePage} />
						<NavItem {...componentsPages.uiPages.subPages.buttonPage} />
						<NavItem {...componentsPages.uiPages.subPages.buttonGroupPage} />
						<NavItem {...componentsPages.uiPages.subPages.cardPage} />
						<NavItem {...componentsPages.uiPages.subPages.collapsePage} />
						<NavItem {...componentsPages.uiPages.subPages.dropdownPage} />
						<NavItem {...componentsPages.uiPages.subPages.modalPage} />
						<NavItem {...componentsPages.uiPages.subPages.offcanvasPage} />
						<NavItem {...componentsPages.uiPages.subPages.progressPage} />
						<NavItem {...componentsPages.uiPages.subPages.tablePage}>
							<NavButton
								title='Open Npm page'
								icon='CustomNpm'
								onClick={() => {
									window.open(
										'https://www.npmjs.com/package/@tanstack/react-table',
										'_blank',
									);
								}}
							/>
						</NavItem>
						<NavItem {...componentsPages.uiPages.subPages.tooltipPage} />
					</NavCollapse>
					<NavCollapse
						text={componentsPages.formPages.text}
						to={componentsPages.formPages.to}
						icon={componentsPages.formPages.icon}>
						<NavItem {...componentsPages.formPages.subPages.fieldWrapPage} />
						<NavItem {...componentsPages.formPages.subPages.checkboxPage} />
						<NavItem {...componentsPages.formPages.subPages.checkboxGroupPage} />
						<NavItem {...componentsPages.formPages.subPages.inputPage} />
						<NavItem {...componentsPages.formPages.subPages.labelPage} />
						<NavItem {...componentsPages.formPages.subPages.radioPage} />
						<NavItem {...componentsPages.formPages.subPages.richTextPage}>
							<NavButton
								title='Open Npm page'
								icon='CustomNpm'
								onClick={() => {
									window.open(
										'https://www.npmjs.com/package/slate-react',
										'_blank',
									);
								}}
							/>
						</NavItem>
						<NavItem {...componentsPages.formPages.subPages.selectPage} />
						<NavItem {...componentsPages.formPages.subPages.selectReactPage}>
							<NavButton
								title='Open Npm page'
								icon='CustomNpm'
								onClick={() => {
									window.open(
										'https://www.npmjs.com/package/react-select',
										'_blank',
									);
								}}
							/>
						</NavItem>
						<NavItem {...componentsPages.formPages.subPages.textareaPage} />
						<NavItem {...componentsPages.formPages.subPages.validationPage}>
							<Badge variant='outline'>Formik</Badge>
						</NavItem>
					</NavCollapse>
					<NavCollapse
						text={componentsPages.integratedPages.text}
						to={componentsPages.integratedPages.to}
						icon={componentsPages.integratedPages.icon}>
						<NavItem {...componentsPages.integratedPages.subPages.reactDateRangePage} />
						<NavItem {...componentsPages.integratedPages.subPages.fullCalendarPage} />
						<NavItem {...componentsPages.integratedPages.subPages.apexChartsPage} />
						<NavItem
							{...componentsPages.integratedPages.subPages.reactSimpleMapsPage}
						/>
						<NavItem {...componentsPages.integratedPages.subPages.waveSurferPage} />
						<NavItem {...componentsPages.formPages.subPages.richTextPage} />
						<NavItem {...componentsPages.formPages.subPages.selectReactPage} />
					</NavCollapse>

					<NavCollapse
						text={componentsPages.iconsPage.text}
						to={componentsPages.iconsPage.to}
						icon={componentsPages.iconsPage.icon}>
						<NavItem {...componentsPages.iconsPage} />
						<NavItem {...componentsPages.iconsPage.subPages.heroiconsPage}>
							<Badge
								variant='outline'
								color='violet'
								className='!border-transparent leading-none'>
								292
							</Badge>
						</NavItem>
						<NavItem {...componentsPages.iconsPage.subPages.duotoneIconsPage}>
							<Badge
								variant='outline'
								color='violet'
								className='!border-transparent leading-none'>
								640
							</Badge>
						</NavItem>
					</NavCollapse>

					<NavSeparator />
					<NavTitle>Members</NavTitle>
					<NavUser
						text={`${usersDb[0].firstName} ${usersDb[0].lastName}`}
						image={usersDb[0].image?.thumb}
						to={`${appPages.chatAppPages.to}/${usersDb[0].username}`}
					/>
					<NavUser
						text={`${usersDb[1].firstName} ${usersDb[1].lastName}`}
						image={usersDb[1].image?.thumb}
						to={`${appPages.chatAppPages.to}/${usersDb[1].username}`}>
						<NavButton
							title='New Message'
							icon='HeroChatBubbleLeftEllipsis'
							iconColor='emerald'
							onClick={() => {}}
						/>
					</NavUser>
					<NavUser
						text={`${usersDb[2].firstName} ${usersDb[2].lastName}`}
						image={usersDb[2].image?.thumb}
						to={`${appPages.chatAppPages.to}/${usersDb[2].username}`}
					/>
					<NavUser
						text={`${usersDb[3].firstName} ${usersDb[3].lastName}`}
						image={usersDb[3].image?.thumb}
						to={`${appPages.chatAppPages.to}/${usersDb[3].username}`}>
						<NavButton
							title='New Message'
							icon='HeroChatBubbleLeftEllipsis'
							iconColor='emerald'
							onClick={() => {}}
						/>
					</NavUser>
					<NavUser
						text={`${usersDb[4].firstName} ${usersDb[4].lastName}`}
						image={usersDb[4].image?.thumb}
						to={`${appPages.chatAppPages.to}/${usersDb[4].username}`}>
						<NavButton
							title='New Message'
							icon='HeroChatBubbleLeftEllipsis'
							iconColor='emerald'
							onClick={() => {}}
						/>
					</NavUser> */}
				</Nav>
			</AsideBody>
			<AsideFooter>
				{/* <Nav>
					<NavSeparator />
					<NavCollapse text='Nav Collapse' to='/' icon='HeroQueueList'>
						<NavItem text='Nav item' icon='HeroPencil' />
						<NavItem text='With badge'>
							<Badge variant='solid' className='leading-none'>
								3
							</Badge>
						</NavItem>
						<NavItem text='With button'>
							<NavButton icon='HeroRocketLaunch' title='New' />
						</NavItem>
						<NavItem text='With badge & button'>
							<Badge variant='solid' className='leading-none'>
								3
							</Badge>
							<NavButton icon='HeroRocketLaunch' title='New' />
						</NavItem>
						<NavTitle>Navigation Title</NavTitle>
						<NavCollapse text='Nav Level 2' to='/' icon='HeroQueueList'>
							<NavItem text='Nav Item' />
							<NavCollapse text='Nav Level 3' to='/' icon='HeroQueueList'>
								<NavItem text='Nav Item' />
							</NavCollapse>
							<NavItem text='Nav Item' />
						</NavCollapse>
					</NavCollapse>
				</Nav> */}

				{/* <UserTemplate /> */}
				<DarkModeSwitcherPart />
			</AsideFooter>
		</Aside>
	);
};

export default DefaultAsideTemplate;
