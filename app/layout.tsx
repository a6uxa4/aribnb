import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'

import { Nunito } from 'next/font/google'
import ToasterProvider from './provider/ToasterProvider'

export const metadata = {
	title: 'Aribnb',
	description: 'Aribnb clone',
}

const font = Nunito({
	subsets: ['latin'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<RegisterModal />
					<Navbar />
				</ClientOnly>
				{children}
			</body>
		</html>
	)
}
