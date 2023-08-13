import ProductAdditional from './ProductAdditional'
import ProductGallery from './ProductGallery'
import ProductMain from './ProductMain'

import styles from './ProductContent.module.scss';
import ProductImage from './ProductImage'

const ProductContent = () => {
	return (
		<div className={styles.root}>
			<ProductImage />
			<ProductMain />
			<ProductAdditional />
			<ProductGallery />
		</div>
	)
}

export default ProductContent