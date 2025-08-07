import type { Metadata } from 'next';
import { Roboto_Slab } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

const robotoSlab = Roboto_Slab({
    variable: '--font-roboto-slab',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Restaurant Demo',
    description: 'A sample template of a webpage advertising a restaurant',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${robotoSlab.className} antialiased flex flex-col `}>
                <Navbar />
                <main className=' mb-32'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
