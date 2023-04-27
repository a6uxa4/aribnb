import ClientOnly from './components/ClientOnly'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './provider/ToasterProvider'
import Navbar from './components/navbar/Navbar'
import './globals.css'

import { Nunito } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
	title: 'Aribnb',
	description: 'Aribnb clone',
}

const font = Nunito({
	subsets: ['latin'],
})

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const currentUser = await getCurrentUser()

	return (
		<html lang='en'>
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<LoginModal />
					<RegisterModal />
					<Navbar currentUser={currentUser} />
				</ClientOnly>
				{children}
			</body>
		</html>
	)
}
