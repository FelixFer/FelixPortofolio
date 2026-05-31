import { FaTimes } from 'react-icons/fa';
import styles from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}

export default function Modal({ open, onClose, children, width = 'w-80' }: ModalProps) {
  return (
    <div
      onClick={onClose}
      className={`${styles.overlay} ${open ? styles.visible : styles.hidden}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.panel} ${width} ${open ? styles.visible : styles.hidden}`}
      >
        <button onClick={onClose} className={styles.closeBtn}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  );
}
