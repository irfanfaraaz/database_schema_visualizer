import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MainNav({ items }: any) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          className="mr-2"
          width={32}
          height={32}
          src="/icon.png"
          alt="user"
        />
        <span className="hidden font-bold sm:flex">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 sm:flex">
          {items?.map(
            (item: any, index: any) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
