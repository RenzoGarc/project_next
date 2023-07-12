import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('@components/landing/Banner/index'), { ssr: false })
const Companies = dynamic(() => import('@components/landing/Companies/Companies'), { ssr: false })
const Courses = dynamic(() => import('@components/landing/Courses/index'), { ssr: false })
const Mentor = dynamic(() => import('@components/landing/Mentor/index'), { ssr: false })
const Testimonials = dynamic(() => import('@components/landing/Testimonials/index'), { ssr: false })
const Newsletter = dynamic(() => import('@components/landing/Newsletter/Newsletter'), { ssr: false })

export default function LandingPage () {
  return (
    <div>
      <Banner />
      <Companies />
      <Courses />
      <Mentor />
      <Testimonials />
      <Newsletter />
    </div>
  );
};