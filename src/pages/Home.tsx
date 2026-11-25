import BlogPreview from '../components/BlogPreview';
import FaqPreview from '../components/FaqPreview';
import Hero from '../components/Hero';
import JoinSteps from '../components/JoinSteps';
import Moments from '../components/Moments';
import ProductTiles from '../components/ProductTiles';
import { usePageTitle } from '../usePageTitle';

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <ProductTiles />
      <Moments />
      <JoinSteps />
      <BlogPreview />
      <FaqPreview />
    </>
  );
}
