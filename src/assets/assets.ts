import gold_crucifix_1 from './productImages/gold_crucifix_1.jpg';

type ImageData = {
  src: string,
  description: string
}

type Images = {
  [key: string]: ImageData
}

const images: Images = {
  'gold_crucifix_1': {src: gold_crucifix_1, description: 'gold crucifix'}
}

// fetches image from images object
// TODO: deal with nonexistant image titles
const getImage = (title: string): ImageData => {
  return images[title];
}

export default getImage;