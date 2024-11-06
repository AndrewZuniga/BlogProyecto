// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ postId, addComment }) => {
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que tanto el comentario como el autor estén llenos
    if (!comment || !author) {
      setError('Por favor, completa el comentario y el nombre del autor.');
      return;
    }

    addComment(postId, { text: comment, author });
    setComment('');
    setAuthor('');
    setError(''); // Limpiar el mensaje de error al enviar el comentario
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
          setError(''); // Limpiar el mensaje de error al escribir en el campo
        }}
        placeholder="Escribe tu comentario"
      ></textarea>

      <input
        type="text"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
          setError(''); // Limpiar el mensaje de error al escribir en el campo
        }}
        placeholder="Tu nombre"
      />

      {/* Mostrar mensaje de error si no se llenan ambos campos */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Añadir Comentario</button>
    </form>
  );
};

export default CommentForm;
