// headwear
import mitre_1 from './productImages/mitre_1.jpg';

// outerwear
import cassock_1 from './productImages/cassock_1.jpg';

// footwear
import leather_loafers_1 from './productImages/leather_loafers_1.jpg';

// accessories
import gold_crucifix_1 from './productImages/gold_crucifix_1.jpg';


type ImageData = {
  src: string,
  description: string
}

type Images = {
  [key: string]: ImageData
}

const images: Images = {
  'mitre_1': {src: mitre_1, description: 'mitre'},
  'cassock_1': {src: cassock_1, description: 'cassock'},
  'leather_loafers_1': {src: leather_loafers_1, description: 'leather loafers'},
  'gold_crucifix_1': {src: gold_crucifix_1, description: 'gold crucifix'},
}

// fetches image from images object
// TODO: deal with nonexistant image titles
const getImage = (title: string): ImageData => {
  return images[title];
}

export default getImage;