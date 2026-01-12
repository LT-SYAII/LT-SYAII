import type { APIRoute } from 'astro';
import { addProject, logAction } from '../../../lib/db';
import fs from 'fs';
import path from 'path';

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  
  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const link = data.get('link') as string;
  const techString = data.get('tech') as string;
  const imageType = data.get('image_type') as string; // 'url' or 'upload'
  
  let image = 'https://www.transparenttextures.com/patterns/cubes.png'; // Default

  // Handle Image Logic
  if (imageType === 'url') {
    const urlInput = data.get('image_url') as string;
    if (urlInput) image = urlInput;
  } else if (imageType === 'upload') {
    const file = data.get('image_file') as File;
    if (file && file.size > 0 && file.name) {
      const buffer = await file.arrayBuffer();
      const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
      const uploadPath = path.join(process.cwd(), 'uploads', fileName);
      
      try {
        fs.writeFileSync(uploadPath, Buffer.from(buffer));
        image = `/uploads/${fileName}`;
      } catch (e) {
        console.error('Upload failed:', e);
      }
    }
  }
  
  if (!title || !description || !link || !techString) {
    return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
  }

  const tech = techString.split(',').map(t => t.trim());

  addProject({ title, description, link, tech, image });
  logAction('PROJECT_CREATED', `Title: ${title}`);

  return redirect('/admin/dashboard');
};
