import type { APIRoute } from 'astro';
import { deleteProject, logAction } from '../../../lib/db';

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;
  if (!id) return new Response(null, { status: 404 });

  deleteProject(Number(id));
  logAction('PROJECT_DELETED', `ID: ${id}`);
  
  return new Response(JSON.stringify({ success: true }), { 
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};