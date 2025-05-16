
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/softsell_logo.png"
        alt="SoftSell Logo"
        width={115}
        height={60}
        priority
      />
     
    </Link>
  );
}
