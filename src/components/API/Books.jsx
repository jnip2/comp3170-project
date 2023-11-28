const apiKey = 'AIzaSyDGx1HR6VgFar2J8XF92pvWATPjSG5L-X4';
const apiUrl = 'https://www.googleapis.com/books/v1/volumes';

const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${apiUrl}?q=${query}&key=${apiKey}`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
