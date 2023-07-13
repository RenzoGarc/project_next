import { NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    if(!req.nextauth.token){
        return NextResponse.redirect(new URL('/landing', req.url));
    }
  }
)

// export const config = { matcher: ["/dashboard"] }
