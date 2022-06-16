import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.page.name === "/products/[path]") {
    const path = req.page.params?.path
    if (path) {
      if (path.startsWith('daskeyboard-')) {
        return NextResponse.redirect(`/products/${path.replace('daskeyboard-', 'daskeyboard/')}`, 302);
      }
      else if (path.startsWith('category-')) {
        return NextResponse.redirect(`/products/${path.replace('category-', 'category/')}${req.nextUrl.search}`, 302);
      }
    }
  }
  return NextResponse.next()
}