import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

function NotFound({ message }) {
  const customId = 'custom-id-yes';
  return toast.error(`${message}`, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: customId,
  });
}

NotFound.propTypes = {
  message: PropTypes.string,
};

export default NotFound;
