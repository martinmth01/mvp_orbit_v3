// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    // Création d'un client Supabase spécifique pour le middleware qui utilise les cookies
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req: request, res })
  
    // Vérifier si l'utilisateur est authentifié via les cookies
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // Log pour le debugging
    console.log('Middleware - Path:', request.nextUrl.pathname)
    console.log('Middleware - Session:', session ? 'Present' : 'Not present')
    if (session) {
      console.log('Middleware - User ID:', session.user.id)
    }

    // Liste des chemins protégés qui nécessitent une authentification
    const protectedPaths = ['/profile', '/profile/add', '/profile/property']
  
    // Vérifier si le chemin actuel est protégé
    const isProtectedPath = protectedPaths.some(path => 
      request.nextUrl.pathname.startsWith(path)
    )

    // Si le chemin est protégé et qu'il n'y a pas de session, rediriger vers la page de connexion
    if (isProtectedPath && !session) {
      console.log('Middleware - Protection de la route ' + request.nextUrl.pathname + ', redirection vers login')
    
      // Créer l'URL de redirection
      const redirectUrl = new URL('/auth/login', request.url)
      // Ajouter le paramètre "returnTo" pour rediriger l'utilisateur vers la page d'origine après la connexion
      redirectUrl.searchParams.set('returnTo', request.nextUrl.pathname)
    
      return NextResponse.redirect(redirectUrl)
    }

    // Si l'utilisateur est sur la page de connexion mais qu'il est déjà authentifié, le rediriger vers le tableau de bord
    if ((request.nextUrl.pathname === '/auth/login' || request.nextUrl.pathname === '/auth/register') && session) {
      console.log('Middleware - Utilisateur déjà authentifié, redirection vers profile')
      return NextResponse.redirect(new URL('/profile', request.url))
    }

    return res
  } catch (error) {
    console.error('Middleware - Erreur:', error)
    // En cas d'erreur, autoriser l'accès et laisser la protection côté client prendre le relais
    return NextResponse.next()
  }
}

// Configuration pour que le middleware s'exécute uniquement sur les chemins spécifiés
export const config = {
  matcher: ['/profile/:path*', '/auth/login', '/auth/register'],
}