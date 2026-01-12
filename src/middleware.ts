import { defineMiddleware } from 'astro:middleware';
import { parse } from 'cookie';
import { trackVisit } from './lib/db';

export const onRequest = defineMiddleware(async (context, next) => {
  const start = performance.now();
  const { request, redirect, url } = context;
  
  if (url.pathname.startsWith('/admin') && !url.pathname.startsWith('/admin/login')) {
    const cookies = parse(request.headers.get('cookie') || '');
    const authCookie = cookies['admin_session'];

    if (authCookie !== import.meta.env.SESSION_SECRET) {
      return redirect('/admin/login');
    }
  }

  if (!url.pathname.startsWith('/admin') && !url.pathname.startsWith('/api') && !url.pathname.includes('.')) {
    try {
      trackVisit(url.pathname);
    } catch (e) {
      console.error('Analytics Error:', e);
    }
  }

  const response = await next();
  
  const latency = Math.round(performance.now() - start);
  context.locals.latency = latency;
  
  response.headers.set('X-Response-Time', `${latency}ms`);

  return response;
});
