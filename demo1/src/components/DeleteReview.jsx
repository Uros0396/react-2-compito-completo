import Button from 'react-bootstrap/Button';

const DeleteReview = ({ id, onDeleteSuccess }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + id,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmVlOWQ5Y2NiMjkxYzAwMTU4ZmZhNzYiLCJpYXQiOjE3MjY5MTM5NDgsImV4cCI6MTcyODEyMzU0OH0.J_kRGzLfLnx17wdw-29AEFnyzf_BotE8397dKj8gYyk',
          },
        }
      );

      if (response.ok) {
       onDeleteSuccess(); 
      } else {
        console.error('Errore durante la cancellazione del commento');
      }
    } catch (error) {
      console.error('Errore nella richiesta:', error);
    }
  };

  return <Button className='ms-5' variant="danger" onClick={handleDelete}>Delete Review</Button>;
};

export default DeleteReview;