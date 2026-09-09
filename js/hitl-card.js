/**
 * Jorgete Design System (JDS) — HITL Universal Card Behavior v1.2
 */

function initHitlCards() {
  document.querySelectorAll('.hitl-card').forEach(card => {
    const editBtn = card.querySelector('.js-btn-edit');
    const contentBox = card.querySelector('.hitl-content-box');
    const editorArea = card.querySelector('.hitl-editor');
    const primaryBtn = card.querySelector('.js-btn-primary');
    const commentInput = card.querySelector('.js-comment-input');
    const addCommentBtn = card.querySelector('.js-btn-add-comment');
    const commentsList = card.querySelector('.js-comments-list');
    const commentsCounter = card.querySelector('.js-comments-count');

    let pendingComments = commentsList ? commentsList.children.length : 0;

    function updateState() {
      if (commentsCounter) {
        commentsCounter.textContent = pendingComments;
      }
      if (primaryBtn) {
        if (pendingComments > 0) {
          primaryBtn.disabled = true;
          primaryBtn.title = "Resolva ou limpe os comentários antes de aprovar/enviar.";
        } else {
          primaryBtn.disabled = false;
          primaryBtn.title = "Aprovar rascunho e prosseguir";
        }
      }
    }

    // Alternar Edição WYSIWYG
    if (editBtn && contentBox && editorArea) {
      editBtn.addEventListener('click', () => {
        const isEditing = !editorArea.classList.contains('hidden');
        if (isEditing) {
          // Salvar edição visual
          contentBox.textContent = editorArea.value;
          editorArea.classList.add('hidden');
          contentBox.classList.remove('hidden');
          editBtn.innerHTML = '✏️ Editar Texto';
        } else {
          // Entrar no modo edição
          editorArea.value = contentBox.textContent;
          contentBox.classList.add('hidden');
          editorArea.classList.remove('hidden');
          editBtn.innerHTML = '💾 Concluir Edição';
          editorArea.focus();
        }
      });
    }

    // Adicionar Comentário de Ajuste
    if (addCommentBtn && commentInput && commentsList) {
      addCommentBtn.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (!text) return;

        const commentItem = document.createElement('div');
        commentItem.className = 'flex items-center justify-between p-2 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900';
        commentItem.innerHTML = `
          <span>💬 ${text}</span>
          <button class="text-amber-700 hover:text-red-600 font-bold ml-2 js-btn-resolve">✓ Resolver</button>
        `;

        commentItem.querySelector('.js-btn-resolve').addEventListener('click', () => {
          commentItem.remove();
          pendingComments--;
          updateState();
        });

        commentsList.appendChild(commentItem);
        commentInput.value = '';
        pendingComments++;
        updateState();
      });
    }

    updateState();
  });
}

document.addEventListener('DOMContentLoaded', initHitlCards);
