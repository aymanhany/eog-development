import React, { useEffect, useState } from 'react';
import styles from './featuredVideo.module.css';
import axios from 'axios';
import clsx from 'clsx';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import SwiperArrows from '../SwiperArrows';

// SwiperCore.use([Navigation]);

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Loading from '../Loading';

function FeaturedVideo() {
	const [videos, setVideos] = useState([]);
	const [currentVideo, setCurrentVideo] = useState(undefined);
	useEffect(async () => {
		const resft = await axios.get(
			'https://egyptoil-gas.com/wp-json/wp/v2/tv?per_page=10&_embed'
		);
		setCurrentVideo(resft.data[0]);
		setVideos(resft.data);
	}, []);

	// const videoPrevRef = React.useRef(null)
	// const videoNextRef = React.useRef(null)

	return (
		<div>
			{/* feature-video-section 
			================================================== */}
			{setVideos.length > 0 ? (
				<section className="feature-video">
					<div className="container">
						<div className="title-section white d-flex space-between">
							<h1>
								<span>Featured Video</span>
							</h1>
							{/* <SwiperArrows prev={videoPrevRef} next={videoNextRef} /> */}
						</div>
						<div className="features-video-box owl-wrapper">
							<div class={styles.videoSlider}>
								<div className={styles.currentSlide}>
									{currentVideo && (
										<div
											className="item news-post video-post"
											key={currentVideo.id}
										>
											<img
												src={currentVideo.featured_media_src_url}
												alt={currentVideo.title.rendered}
											/>
											<a
												target="_blank"
												href={currentVideo.acf.video}
												className="video-link"
											>
												<i className="fa fa-play-circle-o" />
											</a>
											<div className="hover-box">
												<h2>{currentVideo.title.rendered}</h2>
											</div>
										</div>
									)}
								</div>
								<ul class={styles.thumbnails}>
									{videos
										? videos.map((post, i) => (
												<li key={i} onClick={() => setCurrentVideo(post)}>
													<div
														className={clsx(
															styles.thumbnail,
															post.id === currentVideo.id && styles.active,
															'item news-post video-post'
														)}
														key={post.id}
													>
														<img
															src={post.featured_media_src_url}
															alt={post.title.rendered}
														/>
														<h2>{post.title.rendered}</h2>
													</div>
												</li>
										  ))
										: 'loading..'}
								</ul>
							</div>
							{/* <Swiper
                            slidesPerView={4}
                            spaceBetween={15}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = videoPrevRef.current;
                                swiper.params.navigation.nextEl = videoNextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                        >
                            {
                                videos ?
                                    videos.map(post => (
                                        <SwiperSlide>
                                            <div className="item news-post video-post">
                                                <img src={post.featured_media_src_url} alt={post.title.rendered} />
                                                <a target="_blank" href={post.acf.video} className="video-link"><i className="fa fa-play-circle-o" /></a>
                                                <div className="hover-box">
                                                    <h2>{post.title.rendered}</h2>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                    : 'loading..'
                            }

                        </Swiper> */}
						</div>
					</div>
				</section>
			) : (
				<Loading />
			)}
			{/* End feature-video-section */}
		</div>
	);
}

export default FeaturedVideo;
