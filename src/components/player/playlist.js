import track from './tracks/song.mp3';
import track2 from './tracks/song2.mp3';
import cover1 from '../../images/cover1.jpg';
import cover2 from '../../images/cover2.jpg';

const playlist = [
  {
    title: 'Лодка',
    firstAuthor: 'СПБЧ',
    secondAuthor: 'Маруся Романова',
    audio: track,
    cover: cover1,
    text: 'Мой милый, милый мальчик \n Моя милая, милая девочка. \n Никогда не знаешь, что будет дальше',
    id: 1,
  },
  {
    title: 'Kryptonite',
    firstAuthor: '3 Doors Down',
    secondAuthor: 'Федор',
    audio: track2,
    cover: cover2,
    text: 'Текст песни, \n Песни текст.',
    id: 2,
  },
  {
    title: 'Контур',
    firstAuthor: 'Хадн Дадн',
    secondAuthor: 'Варя Карпова и Федя Быстров',
    audio: track,
    cover: cover1,
    text: '',
    id: 3,
  },
  {
    title: 'Контур',
    firstAuthor: 'Хадн Дадн',
    secondAuthor: 'Варя Карпова и Федя Быстров',
    audio: track2,
    cover: cover2,
    text: '',
    id: 4,
  },
];

export default playlist;
