import styles from "./ImageBento.module.css";

function ImageBento() {
	return (
		<section className={styles.bentoContainer}>
			<div className={styles.bento}>
				<div className={styles.flex}>
					<div className={styles.imageLandscape}>
						<img
							src="../../public/images/massa-falafels-paysage.jpg"
							alt="falafels"
						/>
					</div>
					<div className={styles.imagePortrait}>
						<img
							src="../../public/images/massa-frites-portrait.jpg"
							alt="frites"
						/>
					</div>
				</div>

				<div className={styles.flex}>
					<div className={styles.imagePortrait}>
						<img
							src="../../public/images/massa-brioche-portrait.jpg"
							alt="brioche"
						/>
					</div>
					<div className={styles.imageLandscape}>
						<img
							src="../../public/images/massa-pita-a-cuire-paysage.jpg"
							alt="pita a cuire"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ImageBento;
