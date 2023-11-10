const post_id = parseInt(window.location.pathname.split('/').pop());

// Handles updating a blog post
const handlePostUpdate = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#Input-Title').value.trim();
  const content = document.querySelector('#Input-Content').value.trim();
  const tagline = document.querySelector('#Input-tags').value.trim();

  if (title && content) {
    const response = await fetch(`/api/post/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content, tagline }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Error updating post');
    }
  }
};

// Handles deleting a blog post
const handlePostDelete = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete a post.');
  }
};

document.querySelector('#Edit-Post').addEventListener('click', handlePostUpdate);
document.querySelector('#Delete-Post').addEventListener('click', handlePostDelete);
