import React, { useEffect, useState } from 'react';

import axios from 'axios';

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
	useEffect(async () => {
		const resft = await axios.get(
			'https://egyptoil-gas.com/wp-json/wp/v2/tv?per_page=10&_embed'
		);
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
							<Carousel>
								{videos
									? videos.map((post) => (
											<div className="item news-post video-post" key={post.id}>
												<img
													src={post.featured_media_src_url}
													alt={post.title.rendered}
												/>
												<a
													target="_blank"
													href={post.acf.video}
													className="video-link"
												>
													<i className="fa fa-play-circle-o" />
												</a>
												<div className="hover-box">
													<h2>{post.title.rendered}</h2>
												</div>
											</div>
									  ))
									: 'loading..'}
							</Carousel>
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
