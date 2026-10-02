/**
 * Jorgete Design System (JDS) — HITL Universal Card Behavior v2.0
 * Suporte a edição in-place, comentários com trava de segurança e governança visual (DaisyUI)
 */

function initHitlCards() {
  const cards = document.querySelectorAll('.hitl-card, [data-hitl-card], .card');

  cards.forEach(card => {
    // Ignorar cards normais que não possuam controles HITL
    const editBtn = card.querySelector('.js-btn-edit, [data-hitl-edit]');
    const contentBox = card.querySelector('.hitl-content-box, [data-hitl-content], .prose');
    const editorArea = card.querySelector('.hitl-editor, [data-hitl-editor], textarea.hitl-input');
    const primaryBtn = card.querySelector('.js-btn-primary, [data-hitl-approve], .btn-success');
    const commentInput = card.querySelector('.js-comment-input, [data-hitl-comment-input], input[placeholder*="ressalva"], input[placeholder*="anotação"]');
    const addCommentBtn = card.querySelector('.js-btn-add-comment, [data-hitl-add-comment]');
    const commentsList = card.querySelector('.js-comments-list, [data-hitl-comments-list]');
    const commentsCounter = card.querySelector('.js-comments-count, [data-hitl-comments-count]');

    if (!editBtn && !primaryBtn && !commentInput) return;

    let pendingComments = commentsList ? commentsList.children.length : 0;

    function updateState() {
      if (commentsCounter) {
        commentsCounter.textContent = pendingComments;
      }
      if (primaryBtn) {
        if (pendingComments > 0) {
          primaryBtn.setAttribute('disabled', 'true');
          primaryBtn.classList.add('btn-disabled');
          primaryBtn.title = "Existem ressalvas pendentes. Remova ou resolva antes de aprovar.";
        } else {
          primaryBtn.removeAttribute('disabled');
          primaryBtn.classList.remove('btn-disabled');
          primaryBtn.title = "Aprovar minuta e prosseguir";
        }
      }
    }

    // Alternar Edição In-Place
    if (editBtn && contentBox && editorArea) {
      editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isEditing = !editorArea.classList.contains('hidden');
        if (isEditing) {
          // Salvar edição visual
          contentBox.textContent = editorArea.value;
          editorArea.classList.add('hidden');
          contentBox.classList.remove('hidden');
          editBtn.innerHTML = '✏️ Editar';
        } else {
          // Entrar no modo de edição
          editorArea.value = contentBox.textContent.trim();
          contentBox.classList.add('hidden');
          editorArea.classList.remove('hidden');
          editBtn.innerHTML = '💾 Salvar Edição';
          editorArea.focus();
        }
      });
    }

    // Adicionar Comentário de Ajuste ao pressionar Enter ou clicar no botão
    const handleAddComment = () => {
      if (!commentInput) return;
      const text = commentInput.value.trim();
      if (!text) return;

      let list = commentsList;
      if (!list) {
        list = document.createElement('div');
        list.className = 'js-comments-list flex flex-col gap-1.5 mt-2';
        commentInput.parentNode.appendChild(list);
      }

      const commentItem = document.createElement('div');
      commentItem.className = 'flex items-center justify-between p-2 bg-warning/10 border border-warning/30 rounded-lg text-xs text-base-content';
      commentItem.innerHTML = `
        <span class="flex items-center gap-1.5 font-medium">💬 ${text}</span>
        <button type="button" class="btn btn-ghost btn-xs text-warning hover:text-error font-bold js-btn-resolve">✓ Resolver</button>
      `;

      commentItem.querySelector('.js-btn-resolve').addEventListener('click', () => {
        commentItem.remove();
        pendingComments = Math.max(0, pendingComments - 1);
        updateState();
      });

      list.appendChild(commentItem);
      commentInput.value = '';
      pendingComments++;
      updateState();
    };

    if (addCommentBtn) {
      addCommentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleAddComment();
      });
    }

    if (commentInput) {
      commentInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleAddComment();
        }
      });
    }

    updateState();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHitlCards);
} else {
  initHitlCards();
}
