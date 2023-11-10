// Handles adding a comment to a blogpost
const addCommentHandler = async () => {
  const content = document.querySelector('#Input-Comment').value.trim();
  const post_id = parseInt(window.location.pathname.split('/').pop());

  if (content) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create a comment');
    }
  }
};

const commentBtnEl = document.querySelector('#Add-Comment');
if (commentBtnEl) commentBtnEl.addEventListener('click', addCommentHandler);
