/*
export function middleware (request: NextRequest) {
  return NextResponse.redirect(new URL('/new-page', request.url));
}
*/


//export default next auth middleware
export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more parameters
  // +: one or more
  // ?: zero or more
  matcher: ["/dashboard/:path*"],
};
