// Handles creating a new post
const handleNewBlogPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#Input-Title').value.trim();
  const content = document.querySelector('#Input-Content').value.trim();
  const tagline = document.querySelector('#Input-tags').value.trim();

  if (title && content) {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, content, tagline }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Error posting new blogpost');
    }
  }
};

document.querySelector('#Add-Post').addEventListener('click', handleNewBlogPost);
