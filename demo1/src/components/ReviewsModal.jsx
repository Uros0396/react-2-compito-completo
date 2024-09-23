import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReviewCards from './ReviewCards';
import NewReviewModal from './NewReviewModal';


function ReviewsModal({show, setShow, asin}) {
    const [showAddModal, setShowAddModal] = useState(false)
    const [reloadReviews, setReloadReviews] = useState(false);


  const handleClose = () => setShow(false);

  


    const handleReviewAdded = () => {
        setReloadReviews(true); 
  }

  

  const handleAdd = () => {
    setShowAddModal(true)
  }
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ReviewCards asin={asin}  reload={reloadReviews} setReload={setReloadReviews}/>
            <NewReviewModal show={showAddModal} setShow={setShowAddModal} asin={asin} onReviewAdded={handleReviewAdded}/>
           
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
                Add review
            </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default ReviewsModal