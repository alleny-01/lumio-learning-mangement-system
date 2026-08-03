update storage.buckets
set
  public = true,
  allowed_mime_types = array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/markdown',
    'text/plain',
    'image/jpeg',
    'image/png',
    'image/webp'
  ],
  file_size_limit = 10485760
where id = 'lesson-resources';
