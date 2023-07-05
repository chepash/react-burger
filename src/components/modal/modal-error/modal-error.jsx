import cn from 'classnames'
import sadFace from '../../../images/sad-face.svg'
import { DEFAULT_ERROR_TEXT } from '../../../utils/constants'

function ModalError() {
  return (
    <>
      <img className={cn('mt-20')} alt={DEFAULT_ERROR_TEXT} src={sadFace} />
      <figcaption
        className={cn('mt-10', 'mb-20', 'text text_type_main-medium')}
      >
        {DEFAULT_ERROR_TEXT}
      </figcaption>
    </>
  )
}

export default ModalError
